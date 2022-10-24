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
      .then((datas) => {
        res.send(datas);
      })
      .catch((err) => console.log(err));
  }
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

// 글 삭제하기
router.get("/delete/:id", (req, res) => {
  let postID = req.params.id;
  Post.destroy({
    where: {
      postId: postID,
    },
  })
    .then(() => {
      res.redirect("/board");
    })
    .catch(() => {
      console.log(err);
    });
});

// 글 수정하기
router.post("/edit", (req, res) => {
  const { postId, title, content } = req.body;
  Post.update(
    {
      title: title,
      content: content,
    },
    {
      where: { postId: postID },
    }
  );
  res.redirect("/board");
});

// 내보낼떄는 router로 내보내기(받을 때는 상관없음)
module.exports = router;
