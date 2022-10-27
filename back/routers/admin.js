// express, router 사용 설정
const express = require("express");
const router = express.Router();
const { User, Post } = require("../model");

// 관리자 페이지
router.get("/user", (req, res) => {
  User.findAll().then((datas) => {
    res.send(datas);
  });
});
router.get("/user/:id", (req, res) => {
  let userId = req.params.id;
  User.destroy({
    where: {
      userId: userId,
    },
  })
    .then((status) => {
      res.sendStatus(status);
    })
    .catch(() => {
      console.log("****err");
    });
});

// 글 삭제하기
router.get("/board/delete/:id", (req, res) => {
  let postId = req.params.id;
  Post.destroy({
    where: {
      postId: postId,
    },
  })
    .then((status) => {
      res.sendStatus(status);
    })
    .catch(() => {
      console.log("****err");
    });
});

// 글 등록하기
router.post("/board/write", async (req, res) => {
  let { title, content, writer } = req.body;
  if (title === "" || content === "") {
    res.send("error");
  } else {
    Post.create({
      title,
      content,
      writer,
    })
      .then((datas) => {
        res.send(datas);
      })
      .catch((err) => console.log(err));
  }
});
// 글 수정하기
router.post("/board/edit", (req, res) => {
  const { postId, title, content } = req.body;
  Post.update(
    {
      title: title,
      content: content,
    },
    {
      where: { postId: postId },
    }
  )
    .then((datas) => {
      res.send(datas);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
