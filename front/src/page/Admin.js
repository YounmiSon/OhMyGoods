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
          <p onClick={manageNotice} className="cursor-pointer bg-indigo-200 p-3 rounded-lg m-2">
            공지 관리
          </p>
          <p onClick={manageUser} className="cursor-pointer bg-indigo-200 p-3 rounded-lg m-2">
            유저 관리
          </p>
        </div>
      </div>
    </>
  );
};

export default Admin;
