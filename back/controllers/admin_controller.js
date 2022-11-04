// Controller : req, res => 요청, 응답 처리
// 서비스를 실행시키는 함수 구현, 실행
const adminService = require("../services/admin_service");

module.exports.usermain = async (req, res) => {
  const result = await adminService.usermain();
  res.send(result);
  // console.log(result);
};

module.exports.delete = async (req, res) => {
  let userId = await req.params.id;
  adminService.delete(userId);
};

module.exports.postDelete = async (req, res) => {
  let postId = req.params.id;
  adminService.postDelete(postId);
};

module.exports.writePost = async (req, res) => {
  let { title, content, writer } = req.body;
  adminService.writePost();
};

module.exports.editPost = async (req, res) => {
  let postId = req.params.id;
  const { title, content, updatedAt } = req.body;
  adminService.editPost(postId)
};
