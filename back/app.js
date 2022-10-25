// 필요한 모듈 가져오기
const express = require("express");
const cors = require("cors");
// 모델 가져오기
const { sequelize, User } = require("./model");
// 라우터 가져오기
const { boardRouter, shopRouter } = require("./routers");

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
  origin: "http://localhost:3000",
};

// 전달 받은 객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());
// cors options설정
app.use(cors(options));
// /board 경로에 해당하는 모든 라우터
app.use("/board", boardRouter);
app.use("/shop", shopRouter);

// 회원가입 데이터
app.post("/join", async (req, res) => {
  let { email, nickname, password } = req.body;
  const users = await User.findOne({
    where: { email: email },
  });
  // console.log(req.body.email);
  // console.log(users.dataValues.email);
  if (!users) {
    User.create({
      email: email,
      nickname: nickname,
      password: password,
      authority: "일반회원",
      point: 1000,
    }).then(() => {
      res.send(users);
    });
  } else {
    res.send(users);
  }
});

// 로그인
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const users = await User.findOne({
    where: { email: email, password: password },
  })
    .then((e) => {
      const { nickname, authority, point } = e.dataValues;
      const user = { nickname, authority, point };
      res.send({ user });
    })
    .catch((err) => {
      console.log(err);
      res.send(false);
    });
});

// 마이페이지
app.post("/mypage", (req, res) => {
  User.findOne({
    where: {
      nickname: req.body.nickname,
    },
  }).then((e) => {
    res.send({ data: e });
  });
});

// 관리자 페이지
app.get("/admin", (req, res) => {
  User.findAll().then((datas) => {
    console.log(datas + "!@121212");
    res.send(datas);
  });
});

// 포트 대기
app.listen(8000, () => {
  console.log("서버 대기 중");
});
