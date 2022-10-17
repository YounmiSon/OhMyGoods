// 로그인 했을 때/아닐 때 다른 NAV바 보여주기
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from ".././redux/actions/loginAction";
import { useDispatch } from "react-redux";
const Nav = ({ isLogin }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 로그아웃 버튼 눌렀을 때 실행되는 함수
  // dispatch 요청 발생하면 loginAction의 logOut함수를 실행하게 함
  const logOut = () => {
    dispatch(loginAction.logOut());
  };

  return (
    <>
      <ul className="list-none flex justify-evenly items-center bg-yellow-200 h-12">
        <li
          className="cursor-pointer"
          onClick={() => {
            nav("/");
          }}
        >
          메인
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            nav("/board");
          }}
        >
          공지사항
        </li>
        {/* 
        로그인 상태일때만 보여지는 nav 메뉴
        isLogin은 loginReducer에서 초기값으로 설정함
        -> App.js에서 props로 전달되어서 여기 옴  
        */}
        {isLogin ? (
          <>
            <li
              className="cursor-pointer"
              onClick={() => {
                nav("/shop");
              }}
            >
              상점
            </li>
            <li className="cursor-pointer" onClick={logOut}>
              로그아웃
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                nav("/mypage");
              }}
            >
              마이페이지
            </li>
          </>
        ) : (
          <>
            <li
              className="cursor-pointer"
              onClick={() => {
                nav("/login");
              }}
            >
              로그인
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                nav("/join");
              }}
            >
              회원가입
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Nav;
