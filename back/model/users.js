const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId:{
          type: Sequelize.INTEGER, 
          allowNull: false,
          autoIncrement: true,
          unique: true
        },
        email: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(20),
          allowNull: false,
          primaryKey: true,
        },
        password: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        profileImg: {
          type: Sequelize.STRING,
          allowNull: true,
          BLOB: true,
          defaultValue: "./public/img/default_profile.jpg",
        },
        authority: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        point: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "writer", sourceKey: "nickname" });
  }
}

module.exports = User;
