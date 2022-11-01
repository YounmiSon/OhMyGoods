// 로그인 했을 때/아닐 때 다른 NAV바 보여주기
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../modules/user";
import "./Nav.css";

const Nav = ({ isAdmin, isLogin }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  // 로그아웃 버튼 눌렀을 때 실행되는 함수
  // dispatch 요청 발생하면 loginAction의 logOut함수를 실행하게 함
  const logOutBtn = () => {
    dispatch(logOut());
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <nav className={`nav ${show && "nav__black"}`}>
        <img
          alt="logo"
          src="/img/icon/logo.png"
          className="cursor-pointer fixed left-[50px] w-[90px]"
          onClick={() => {
            nav("/");
          }}
        />
        <div className="ml-[200px] w-2/5 mt-[5px]">
          <ul className="nav-bar list-none flex justify-evenly items-center bg-transparent h-[48px]">
            {/* 
        로그인 상태일때만 보여지는 nav 메뉴
        isLogin은 loginReducer에서 초기값으로 설정함
        -> App.js에서 props로 전달되어서 여기 옴  
        */}
            {isLogin ? (
              <>
                {isAdmin ? (
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      nav("/admin");
                    }}
                  >
                    관리자
                  </li>
                ) : (
                  ""
                )}
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    nav("/board");
                  }}
                >
                  공지사항
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    nav("/shop");
                  }}
                >
                  상점
                </li>
                <li className="cursor-pointer" onClick={logOutBtn}>
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
        </div>
      </nav>
    </>
  );
};

export default Nav;
