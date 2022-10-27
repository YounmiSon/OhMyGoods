// express, router 사용 설정
const express = require("express");
const router = express.Router();
const { Post } = require("../model");

// 게시판 목록 그리기
router.get("/", (req, res) => {
  Post.findAll().then((datas) => {
    res.send(datas);
  });
});

// 글 조회하기
router.post("/details", (req, res) => {
  let { postID } = req.body;
  Post.findOne({
    where: { postId: postID },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});



// 내보낼떄는 router로 내보내기(받을 때는 상관없음)
module.exports = router;
