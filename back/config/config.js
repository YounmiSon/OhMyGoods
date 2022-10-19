const dot = require("dotenv").config();

const config = {
  dev: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "pj1",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: true,
    },
  },
};
module.exports = config;
