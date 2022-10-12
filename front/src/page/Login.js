import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const loginHandler = () => {
    // 값이 하나라도 비어있을 때
    !inputs.id || !inputs.pwd
      ? alert("아이디와 비밀번호를 확인해주세요")
      : nav("/shop");
    dispatch({ type: "LOGIN", payload: { ...inputs } });
    nav("/");
  };

  const signUp = () => {
    nav("/join");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <label>아이디</label>
        <input
          type="text"
          name="id"
          value={inputs.id}
          onChange={inputsHandler}
          className="border-black border-[1px]"
        />
        <label>비밀번호</label>
        <input
          type="password"
          name="pwd"
          value={inputs.pwd}
          onChange={inputsHandler}
          className="border-black border-[1px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <input
          type="submit"
          value="로그인"
          onClick={loginHandler}
          className="pr-6"
        />
        <input type="button" value="회원가입" onClick={signUp} />
      </div>
    </>
  );
};

export default Login;
