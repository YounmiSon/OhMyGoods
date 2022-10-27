const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        productsId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        productsImg: {
          type: Sequelize.STRING,
          allowNull: true,
          BLOB: true,
        },
        productsName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        productsPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        productsDetail: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Product",
        tableName: "Products",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Product.belongsTo(db.User, { foreignKey: "uploader", sourceKey: "nickname" });
    db.Product.hasMany(db.Review, { foreignKey: "productsId", sourceKey: "productsId" });
    db.Product.belongsTo(db.Cart, { foreignKey: "cartProductId", sourceKey: "cartProductId" });
  }
}

module.exports = Product;
