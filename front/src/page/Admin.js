import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const nav = useNavigate();

  const manageNotice = () => {
    nav("/admin/board");
  };

  const manageUser = () => {
    nav("/admin/user");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="text-3xl">관리자 페이지</h1>
        <div className="flex justify-center items-center my-4">
          <p onClick={manageNotice} className="cursor-pointer text-3xl text-white bg-[#816bff]/50 w-56 h-36 text-center pt-[50px] font-bold rounded-lg m-3 shadow-lg">
            공지 관리
          </p>
          <p onClick={manageUser} className="cursor-pointer text-3xl text-white bg-[#816bff]/50 w-56 h-36 text-center pt-[50px] font-bold rounded-lg m-3 shadow-lg">
            유저 관리
          </p>
        </div>
      </div>
    </>
  );
};

export default Admin;
