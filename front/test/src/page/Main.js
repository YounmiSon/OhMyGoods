import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
const Main = ({ user }) => {
  const nav = useNavigate();
  const [inputs, setInputs] = useState({
    id: "",
    pwd: "",
  });
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const onLogin = () => {
    // 값이 하나라도 비어있을 때
    !inputs.id || !inputs.pwd
      ? alert("아이디와 비밀번호를 확인해주세요")
      : nav("/shop");
  };

  const signUp = () => {
    nav("/join");
  };
  return (
    <>
      <h1>Main</h1>
      <div className="flex flex-col justify-center items-center">
        <label>아이디</label>
        <input
          type="text"
          name="id"
          value={inputs.id}
          onChange={inputsHandler}
        />
        <label>비밀번호</label>
        <input
          type="password"
          name="pwd"
          value={inputs.pwd}
          onChange={inputsHandler}
        />
      </div>

      <input type="submit" value="로그인" onClick={onLogin} />
      <input type="button" value="회원가입" onClick={signUp} />
    </>
  );
};

export default Main;
