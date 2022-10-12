import React from "react";
import { useNavigate } from "react-router-dom";
const Nav = ({ isLogin }) => {
  const nav = useNavigate();
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
      </ul>
    </>
  );
};

export default Nav;
