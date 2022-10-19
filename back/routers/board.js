// express, router 사용 설정
const express = require("express");
const router = express.Router();
const { Post } = require("../model");

// 게시판 목록 그리기
router.post("/", (req, res) => {
  Post.findAll().then((datas) => {
    res.send(datas);
  });
});

// 글 등록하기
router.post("/write", async (req, res) => {
  let { title, content, writer } = req.body;
  if (title === "" || content === "") {
    res.send("error");
  } else {
    Post.create({
      title,
      content,
      writer,
    })
      .then(() => {
        res.send("글 등록됨");
      })
      .catch((err) => console.log(err));
  }
});

// 내보낼떄는 router로 내보내기(받을 때는 상관없음)
module.exports = router;
