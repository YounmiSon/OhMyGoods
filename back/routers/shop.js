const express = require("express");
const router = express.Router();
const { Product } = require("../model");

router.get("/", (req, res) => {
  Product.findAll().then((datas) => {
    res.send(datas);
  });
});

// 물건 등록하기
router.post("/add", (req, res) => {
  let { productsName, productsPrice, productsDetail, productsImg } = req.body;
  if (productsName === "" || productsPrice === "" || productsDetail === "" || productsImg === "") {
    res.send("error");
  } else {
    Product.create({
      productsName,
      productsPrice,
      productsDetail,
      productsImg,
      isSelected: false,
    })
      .then((datas) => {
        res.send(datas);
      })
      .catch((err) => console.log(err));
  }
});

router.post("/details", (req, res) => {
  let { productsId } = req.body;
  Product.findOne({
    where: { productsId: productsId },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/delete/:id", (req, res) => {
  let productsID = req.params.id;
  Product.destroy({
    where: {
      productsId: productsID,
    },
  })
    .then(() => {
      res.redirect("/shop");
    })
    .catch((err) => {
      console.log(err);
    });
});

// 장바구니
router.post("/cart", async (req, res) => {
  let { items } = req.body;
  const product = await Product.findOne({
    where: { productsId: items },
  })
    .then((e) => {
      console.log(product);
      res.send(e);
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
});
module.exports = router;
