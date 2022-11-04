// Service  : 시퀄라이즈 관련
const { User, Post } = require("../model");

module.exports.usermain = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports.delete = async (userId) => {
  try {
    return await User.destroy({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.postDelete = async (postId) => {
  try {
    return await Post.destroy({
      where: {
        postId: postId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.writePost = async () => {
  try {
    return await Post.create({
      title,
      content,
      writer,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.editPost = async (postId) => {
  try {
    return await Post.update(
      {
        title,
        content,
        updatedAt,
      },
      {
        where: { postId: postId },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
