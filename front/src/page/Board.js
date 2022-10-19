import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { boardAction } from "../redux/actions/boardAction";
const Board = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // posts는 reducer에 있는 초기값([]) posts
  const posts = useSelector((state) => state.boardReducer.posts);

  useEffect(() => {
    dispatch(boardAction.getPost());
  }, []);

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
            {posts.map(({ postId, title, createdAt, writer }) => (
              <tr key={postId} className="flex justify-evenly items-center text-center h-12 border-[1px] border-b-black">
                <td className="p-16">{postId}</td>
                <td>{title}</td>
                <td>{writer}</td>
                <td>{createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-4/5">
        <button className="float-right justify-center items-center bg-yellow-200 p-3 rounded-xl mt-4" onClick={writePost}>
          글쓰기
        </button>
      </div>
    </>
  );
};

export default Board;
