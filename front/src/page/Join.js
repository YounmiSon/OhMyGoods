// 회원가입 페이지
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";

const Join = () => {
  const dispatch = useDispatch();

  // useRef를 사용하면 불필요한 렌더링을 막을 수 있다,
  // 변경 시 렌더링 발생시키지 말하야 하는 값을 다룰 때 사용
  // input요소를 클릭하지 않고 포커스를 주고 싶을 때 주로 사용
  const emailRef = useRef();

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

  // 이메일 정규식 체크해서 실시간으로 알려주기
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
      dispatch(loginAction.join(userInputs.email, userInputs.nickname, userInputs.password));
    } else {
      alert("다시 작성해주세요");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28 ">
        <label>이메일</label>
        <input type="text" name="email" value={userInputs.email} className="border-black border-[1px]" onChange={userInputsHandler} onBlur={checkEmail} />

        <label ref={emailRef} className="hidden text-red-500 animate-bounce mt-2">
          유효하지 않는 이메일입니다
        </label>

        <label className="mt-4">닉네임</label>
        <input type="text" name="nickname" value={userInputs.nickname} className="border-black border-[1px]" onChange={userInputsHandler} />

        <label className="mt-4">비밀번호</label>
        <input type="password" name="password" value={userInputs.password} className="border-black border-[1px]" onChange={userInputsHandler} />
      </div>
      <div className="flex justify-center items-center">
        <input type="submit" value="회원가입" onClick={signUp} />
      </div>
    </>
  );
};

export default Join;
