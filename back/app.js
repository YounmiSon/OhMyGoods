// 필요한 모듈 가져오기
const express = require("express");
const cors = require("cors");
const { sequelize, User } = require("./model");

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

// 회원가입 데이터
app.post("/join", async (req, res) => {
  let { email, nickname, password } = req.body;
  const users = await User.findOne({
    where: { email: email },
  });
  if (!users) {
    User.create({
      email: email,
      nickname: nickname,
      password: password,
      authority: "일반회원",
      point: 1000,
    }).then(() => {
      res.send("가입을 축하합니다");
    });
  } else {
    res.send("이미 존재하는 이메일입니다");
  }
});

// 로그인
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const users = await User.findOne({
    where: { email: email, password: password },
  })
    .then((e) => {
      if (e.authority === "관리자") {
        res.send("관리자계정으로 접속하셨습니다");
      } else if (e.authority === "일반회원") {
        res.send("하이");
      }
    })
    .catch((err) => {
      res.send(false);
    });
});

// 게시판
app.post("/board", (req, res) => {
  Post.findAll().then((datas) => {
    res.send(datas);
  });
});

// 게시판
app.post("/board/write", async (req, res) => {
  let { title, content, writer } = req.body;
  Post.create({
    title: title,
    content: content,
    writer: writer,
  })
    .then(() => {
      res.send("글 등록됨");
    })
    .catch((err) => res.send(err));
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

// 포트 대기
app.listen(8000, () => {
  console.log("서버 대기 중");
});
