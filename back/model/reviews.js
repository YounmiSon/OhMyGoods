const Sequelize = require("sequelize");

class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        reviewId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        reviewContent: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Review",
        tableName: "Reviews",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Review.belongsTo(db.Product, { foreignKey: "productsId", targetKey: "productsId" });
    db.Review.belongsTo(db.User, { foreignKey: "reviewWriter", targetKey: "nickname" });
  }
}

module.exports = Review;
