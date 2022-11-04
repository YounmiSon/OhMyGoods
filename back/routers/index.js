// Router : 미들웨어, url쓰고 컨트롤러 불러오기
const boardRouter = require("./board");
const shopRouter = require("./shop");
const adminRouter = require("./admin");
module.exports = { boardRouter, shopRouter, adminRouter };
