import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";
const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const login = () => {
    // 로그인을 하면 리덕스에 신호를 보내주는데
    // loginAction의 login을 찾아서 거기다가 inputs.email, password를 보내줌
    // 상태를 변화시킬 때 이 객체를 참조하라고 보내주는 데이터이고
    // 그럼 action에서 파라미터로 dispatch랑 getState를 받는 함수자체를 thunk 미들웨어로 넘기게 된다
    dispatch(loginAction.login(inputs.email, inputs.password, nav));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center  mt-28">
        <label>이메일</label>
        <input type="text" name="email" value={inputs.email} onChange={inputsHandler} className="border-black border-[1px]" />
        <label className="mt-4">비밀번호</label>
        <input type="password" name="password" value={inputs.password} onChange={inputsHandler} className="border-black border-[1px]" />
      </div>
      <div className="flex justify-center items-center">
        <input type="submit" value="로그인" onClick={login} className="cursor-pointer pr-6" />
        <Link to="/join">
          <input type="button" value="회원가입" className="cursor-pointer" />
        </Link>
      </div>
    </>
  );
};

export default Login;
