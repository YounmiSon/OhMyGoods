const Sequelize = require("sequelize");

class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        commentId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        commentContent: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        commentWriter: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Comment",
        tableName: "Comments",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.Post, { foreignKey: "postId", targetKey: "postId" });
    
  }
}

module.exports = Comment;
