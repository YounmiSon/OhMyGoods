import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/middleware/loginAction";

const Join = () => {
  const dispatch = useDispatch();
  const [userInputs, setUserInputs] = useState({
    email: "",
    nickname: "",
    password: "",
  });
  const userInputsHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
    console.log(userInputs);
  };
  const signUp = () => {
    dispatch(
      loginAction.join(
        userInputs.email,
        userInputs.nickname,
        userInputs.password
      )
    );
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <label>이메일</label>
        <input
          type="text"
          name="email"
          value={userInputs.email}
          className="border-black border-[1px]"
          onChange={userInputsHandler}
        />
        <label className="mt-4">닉네임</label>
        <input
          type="text"
          name="nickname"
          value={userInputs.nickname}
          className="border-black border-[1px]"
          onChange={userInputsHandler}
        />
        <label className="mt-4">비밀번호</label>
        <input
          type="password"
          name="password"
          value={userInputs.password}
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
