// 필요한 모듈 가져오기
const express = require("express");
const cors = require("cors");
const { sequelize, user } = require("./public");

// express 호출
const app = express();

// sequelize 사용 설정
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

const options = {
  origin: "http://localhost:8000",
};

// 전달 받은 객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());
// cors options설정
app.use(cors(options));

// 포트 대기
app.listen(8000, () => {
  console.log("서버 대기 중");
});
