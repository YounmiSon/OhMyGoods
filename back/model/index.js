const Sequelize = require("sequelize");
const config = require("../config/config");

const User = require("./users");
const Post = require("./posts");
const Product = require("./products");
const Comment = require("./comments");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment = Comment;
db.Product = Product;

User.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);
Product.init(sequelize);

User.associate(db);
Post.associate(db);
Comment.associate(db);
// Product.associate(db);

module.exports = db;
