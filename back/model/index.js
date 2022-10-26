const Sequelize = require("sequelize");
const config = require("../config/config");

const User = require("./users");
const Post = require("./posts");
const Product = require("./products");
const Review = require("./reviews");
const Cart = require("./carts");

const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Review = Review;
db.Product = Product;
db.Cart = Cart;

User.init(sequelize);
Post.init(sequelize);
Review.init(sequelize);
Product.init(sequelize);
Cart.init(sequelize);

User.associate(db);
Post.associate(db);
Review.associate(db);
Product.associate(db);
Cart.associate(db);

module.exports = db;
