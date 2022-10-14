import React from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from ".././redux/actions/loginAction";
import { useDispatch } from "react-redux";
const Nav = ({ isLogin }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
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
