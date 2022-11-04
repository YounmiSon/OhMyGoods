// express, router 사용 설정
const express = require("express");
const router = express.Router();
const { User, Post } = require("../model");
const admin_controller = require("../controllers/admin_controller");

// 관리자 페이지
router.get("/user", admin_controller.usermain);

// 유저 삭제하기
router.get("/user/:id", admin_controller.delete);

// 글 삭제하기
router.get("/board/delete/:id", admin_controller.postDelete);

// 글 등록하기
router.post("/board/write", admin_controller.writePost);

// 글 수정하기
router.post("/board/edit/:id", admin_controller.editPost);

module.exports = router;
