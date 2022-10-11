import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const nav = useNavigate();
  const [userInputs, setUserInputs] = useState({
    userId: "",
    userName: "",
    userPwd: "",
  });
  const userInputsHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
    console.log(userInputs);
  };
  const onLogin = () => {
    // 값이 하나라도 비어있을 때
    !userInputs.userId || !userInputs.userPwd
      ? alert("아이디와 비밀번호를 입력해주세요")
      : nav("/");
  };
  return (
    <>
      <h1>Main</h1>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="userId"
          value={userInputs.userId}
          onChange={userInputsHandler}
        />
        <input
          type="text"
          name="userName"
          value={userInputs.userName}
          onChange={userInputsHandler}
        />
        <input
          type="password"
          name="userPwd"
          value={userInputs.userPwd}
          onChange={userInputsHandler}
        />
      </div>

      <input type="submit" value="로그인" onClick={onLogin} />
      <input type="button" value="회원가입" />
    </>
  );
};

export default Join;
