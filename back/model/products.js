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
        isSelected: {
          type: Sequelize.BOOLEAN,
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
}

module.exports = Product;
