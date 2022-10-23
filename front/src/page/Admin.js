import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const nav = useNavigate();
  const showNotice = () => {
    nav("/board");
  };
  const writeNotice = () => {
    nav("/board/write");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="text-3xl">관리자 페이지</h1>
        <div className="w-3/5">
          <div className="flex justify-center items-center my-4">
            <p onClick={showNotice} className="cursor-pointer bg-indigo-200 p-4 rounded-lg m-2">
              공지 확인
            </p>
            <p onClick={writeNotice} className="cursor-pointer bg-indigo-200 p-4 rounded-lg m-2">
              공지 등록
            </p>
            <p className="bg-indigo-200 p-4 rounded-lg m-2">유저 관리</p>
          </div>

          <div className="flex justify-center items-center">
            <table className="w-3/5">
              <thead>
                <tr className="grid-rows-4 text-center bg-gray-100 h-12 border-[1px] border-b-black">
                  <td>이메일</td>
                  <td>닉네임</td>
                  <td>가입일</td>
                  <td>회원관리</td>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
