import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Board = () => {
  const nav = useNavigate();

  // posts는 reducer에 있는 초기값([]) posts
  const posts = useSelector((state) => state.boardReducer.posts);
  
  // 글쓰기 버튼 클릭시 write 페이지로 보내줌
  const writePost = () => {
    nav("/board/write");
  };
  return (
    <>
      <div className="flex justify-center items-center mt-28">
        <table className="w-3/5">
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
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-4/5">
        <button className="float-right justify-center items-center bg-yellow-200 p-3 rounded-xl" onClick={writePost}>
          글쓰기
        </button>
      </div>
    </>
  );
};

export default Board;
