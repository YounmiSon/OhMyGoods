import React from "react";

const AdminWrite = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <label>제목</label>
        <input type="text" className="border-[1px] border-black w-[50%]" />
        <label className="mt-4">내용</label>
        <textarea className="border-[1px] border-black w-[50%] h-80" />
        <input
          type="submit"
          value="등록하기"
          className="justify-center items-center bg-yellow-200 p-3 rounded-xl mt-4"
        />
      </div>
    </>
  );
};

export default AdminWrite;
