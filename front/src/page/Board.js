import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const posts = useSelector((state) => state.boardReducer.posts);
  const nav = useNavigate();
  const writePost = () => {
    nav("/board/write");
  };
  const isAdmin = () => {};
  return (
    <>
      <div className="flex justify-center items-center my-8">
        <table className="w-4/5">
          <thead>
            <tr className="flex justify-evenly items-center bg-gray-100 h-12 border-[1px] border-b-black">
              <td>번호</td>
              <td>제목</td>
              <td>글쓴이</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-evenly items-center text-center h-12 border-[1px] border-b-black">
              <td>1</td>
              <td>test test test</td>
              <td>admin</td>
              <td>2022-10-14</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-4/5">
        {isAdmin ? (
          <button
            className="float-right justify-center items-center bg-yellow-200 p-3 rounded-xl"
            onClick={writePost}
          >
            글쓰기
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Board;
