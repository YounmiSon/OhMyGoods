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
  const signUp = () => {
    // 값이 하나라도 비어있을 때
    !userInputs.userId || !userInputs.userPwd || !userInputs.userName
      ? alert("정보를 모두 입력해주세요")
      : nav("/");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <label>아이디</label>
        <input
          type="text"
          name="userId"
          value={userInputs.userId}
          className="border-black border-[1px]"
          onChange={userInputsHandler}
        />
        <label>이름</label>
        <input
          type="text"
          name="userName"
          value={userInputs.userName}
          className="border-black border-[1px]"
          onChange={userInputsHandler}
        />
        <label>비밀번호</label>
        <input
          type="password"
          name="userPwd"
          value={userInputs.userPwd}
          className="border-black border-[1px]"
          onChange={userInputsHandler}
        />
      </div>
      <div className="flex justify-center items-center">
        <input type="submit" value="회원가입" onClick={signUp} />
      </div>
    </>
  );
};

export default Join;
