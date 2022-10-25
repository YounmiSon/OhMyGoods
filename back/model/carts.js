const Sequelize = require("sequelize");

class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cartProductId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        cartProductImg: {
          type: Sequelize.STRING,
          allowNull: true,
          BLOB: true,
        },
        cartProductName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        cartProductPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Cart",
        tableName: "Carts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Cart;
