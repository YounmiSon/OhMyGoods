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
        cartProductName: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        cartProductPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cartProductAmount: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: "Cart",
        tableName: "Carts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Cart.belongsTo(db.User, { foreignKey: "nickname", targetKey: "nickname" });
    db.Cart.belongsTo(db.Product, { foreignKey: "productsId", targetKey: "productsId" });
  }
}

module.exports = Cart;
