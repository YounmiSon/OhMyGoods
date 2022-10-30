const express = require("express");
const router = express.Router();
const { Product } = require("../model");

// 상품 업로드 할 때 사진 같이 보내주려고
const multer = require("multer");

// multer 저장 설정
const storage = multer.diskStorage({
  // 이미지를 저장할 경로, 지정 안하면 자동 생성됨
  destination: function (req, file, callback) {
    callback(null, "upload/");
  },
  // 파일 이름도 지정해준다, 중복될 경우 오류 발생할 수 있음
  filename: function (req, file, cb) {
    // cb = callback
    cb(null, "imgfile" + Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 300 * 300 },
});

// app.js에서 하긴 했는데 뭔가 안되길래 여기도 넣어줌
router.use(express.urlencoded({ extended: false }));

// 상품 목록 불러오기
router. get("/", (req, res) => {
  Product.findAll().then((datas) => {
    res.send(datas);
  });
});

// 물건 등록하기
//                  upload 객체로 사용할 수 있는 메서드, single : 하나의 이미지만 업로드 할 때
router.post("/add", upload.single("file"), (req, res) => {
  let { productsName, productsPrice, productsDetail, productsImg } = req.body;
  // console.log(req.body)
  // [Object: null prototype] {
  //   productsName: '테스트 상품1',
  //   productsPrice: '50000',
  //   productsDetail: '50000원 짜리 농담곰, 귀엽습니다',
  //   productsImg: '02.png'
  // }
  if (productsName === "" || productsPrice === "" || productsDetail === "" || productsImg === "") {
    res.send("error");
  } else {
    Product.create({
      productsName,
      productsPrice,
      productsDetail,
      // productsImg: "http://localhost:8000/img/" + req.file.filename,
      productsImg: "./img/ex.jpg",
    })
      .then((datas) => {
        res.send(datas);
      })
      .catch((err) => console.log(err));
  }
});

// 상품 상세 페이지
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

// 상품 삭제
router.get("/delete/:id", (req, res) => {
  let productsID = req.params.id;
  Product.destroy({
    where: {
      productsId: productsID,
    },
  })
    .then(() => {
      res.send("성공");
    })
    .catch((err) => {
      console.log(err);
    });
});

// 장바구니
// 모든 유저의 장바구니를 Cart DB에 담은 다음에 로그인 정보와 일치하는 userId를 이용해 가져온다
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
