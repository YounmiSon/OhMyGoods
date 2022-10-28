// 회원가입 페이지
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/actions/loginAction";

const Join = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // useRef를 사용하면 불필요한 렌더링을 막을 수 있다,
  // 변경 시 렌더링 발생시키지 말하야 하는 값을 다룰 때 사용
  // input요소를 클릭하지 않고 포커스를 주고 싶을 때 주로 사용
  const emailRef = useRef();
  const pwdRef = useRef();
  const nicknameRef = useRef();

  // 입력 값 받기
  const [userInputs, setUserInputs] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  // 유효한지 검사하기 위해서 기본값을 false로 두고 모두 true일때 넘긴다
  const [userValidate, setUserValidate] = useState({
    email: false,
    nickname: false,
    password: false,
  });

  // 정규식 체크해서 실시간으로 알려주기
  // 입력창에서 벗어났을 때 발생하는 onBlur 이벤트에 걸려있는 함수
  const checkEmail = () => {
    // 정규식 + test함수
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regTest = regExp.test(userInputs.email);
    // 실시간 유효성 알려줌 ref는 document.querySelector와 같은데 current로 받는다
    // 여기에 안내메세지 걸려있는 classList add/remove 해가지고 onOff인자에 따라 보여줌
    const onValidate = (onOff) => (onOff ? emailRef.current.classList.remove("hidden") : emailRef.current.classList.add("hidden"));

    // 정규식을 만족하면 onValidate가 true라서 remove가 되고 글씨 안보임, f
    regTest ? onValidate(false) : onValidate(true);
  };

  const checkName = () => {
    const regExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
    const regTest = regExp.test(userInputs.nickname);
    const onValidate = (onOff) => (onOff ? nicknameRef.current.classList.remove("hidden") : nicknameRef.current.classList.add("hidden"));
    regTest ? onValidate(false) : onValidate(true);
  };

  const checkPwd = () => {
    const regExp = /^[A-Za-z0-9]{6,12}$/;
    const regTest = regExp.test(userInputs.password);
    const onValidate = (onOff) => (onOff ? pwdRef.current.classList.remove("hidden") : pwdRef.current.classList.add("hidden"));

    regTest ? onValidate(false) : onValidate(true);
  };

  // 정규식 모아둠
  const regs = {
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    nickname: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
    password: /^[A-Za-z0-9]{6,12}$/,
  };

  // 정규식 체크하는 애
  const regChecker = (regExp, value) => regExp.test(value);

  // 유저 입력 받고 ~ 정규식 체크함
  const userInputsHandler = (e) => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
    setUserValidate({
      ...userValidate,
      [name]: regChecker(regs[name], value),
    });
  };

  // 모두 true이면 가입시켜준다 every() 메서드 사용(:배열 안의 모든 요소가 판별 함수를 통과하는지 boolean으로 반환)
  const signUp = () => {
    const isAllTrue = Object.values(userValidate).every((value) => value); //[true, true, true]
    // 모두 true이면 dispatch loginAction의 join함수 호출, 액션 실행
    if (isAllTrue) {
      dispatch(loginAction.join(userInputs.email, userInputs.nickname, userInputs.password, nav));
    } else {
      alert("다시 작성해주세요");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#816bff]/50 w-96 h-[450px] rounded-xl mt-52 shadow-md">
          <div className="flex flex-col justify-center items-center mt-16">
            <label className="text-white text-lg">이메일</label>
            <input placeholder="ex)hello123@test.com" type="text" name="email" value={userInputs.email} className="w-60 h-10 bg-white shadow-md text-lg" onChange={userInputsHandler} onBlur={checkEmail} />

            <label ref={emailRef} className="hidden text-red-600 animate-bounce mt-2">
              유효하지 않는 이메일입니다
            </label>

            <label className="mt-4 text-white text-lg">닉네임</label>
            <input placeholder="2-16자 이내, 초성은 안됨" type="text" name="nickname" value={userInputs.nickname} className="w-60 h-10 bg-white shadow-md text-lg" onChange={userInputsHandler} onBlur={checkName} />
            <label ref={nicknameRef} className="hidden text-red-600 animate-bounce mt-2">
              닉네임 조건을 확인해주세요
            </label>

            <label className="mt-4 text-white text-lg">비밀번호</label>
            <input placeholder="대/소문자 or 숫자 6-12자" type="password" name="password" value={userInputs.password} className="w-60 h-10 bg-white shadow-md text-lg" onChange={userInputsHandler} onBlur={checkPwd} />
            <label ref={pwdRef} className="hidden text-red-600 animate-bounce mt-2">
              비밀번호 조건을 확인해주세요
            </label>
          </div>
          <div className="flex justify-center items-center">
            <input type="submit" value="회원가입" onClick={signUp} className="bg-white cursor-pointer w-20 h-10 rounded-lg mt-6 hover:bg-[#816bff] hover:text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
