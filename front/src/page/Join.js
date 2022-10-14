import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";

const Join = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const [userInputs, setUserInputs] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  const [userValidate, setUserValidate] = useState({
    email: false,
    nickname: false,
    password: false,
  });

  const checkEmail = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regTest = regExp.test(userInputs.email);
    const onValidate = (onOff) =>
      onOff
        ? emailRef.current.classList.remove("hidden")
        : emailRef.current.classList.add("hidden");

    // 정규식을 만족할 경우
    regTest ? onValidate(false) : onValidate(true);
  };

  // useEffect(() => {
  //   let regExp =
  //     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //   const isValidate = () => regExp.test(userInputs.email);
  //   setUserValidate({ ...userValidate, email: isValidate() });
  // }, [userInputs.email]);

  const regs = {
    email:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    nickname: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
    password: /^[A-Za-z0-9]{6,12}$/,
  };
  const regChecker = (regExp, value) => regExp.test(value);

  const userInputsHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
    setUserValidate({
      ...userValidate,
      [name]: regChecker(regs[name], value),
    });
  };
  useEffect(() => {
    console.log(userInputs);
    console.log(userValidate);
  }, [userInputs]);

  // const isValidate = () => {
  //   let regExp =
  //     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //   const regTest = () => regExp.test(userInputs.email);

  //   // 정규식을 만족할 경우
  //   if (regTest()) return true;
  //   // ""이면서 정규식이 틀릴경우 false
  //   else if (!regTest() && userInputs.email === "") return false;
  //   else return false; //
  // };

  const signUp = () => {
    const isAllTrue = Object.values(userValidate).every((value) => value); //[true, true, true]

    if (isAllTrue) {
      dispatch(
        loginAction.join(
          userInputs.email,
          userInputs.nickname,
          userInputs.password
        )
      );
    } else {
      alert("ㅇㅅㅇ 다시 작성하라뀨!");
    }
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
          onBlur={checkEmail}
        />

        <label
          ref={emailRef}
          className="hidden text-red-500 animate-bounce mt-2"
        >
          유효하지 않는 이메일이라뀨 ㅇㅅㅇ !
        </label>

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
