import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { boardAction } from "../redux/actions/boardAction";
const Board = (postId) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // posts는 reducer에 있는 초기값([]) posts
  const posts = useSelector((state) => state.boardReducer.posts);
  // const id = useSelector((state) => state.boardReducer.nextPostId);

  // boardAction에 있는 getPost함수 실행
  useEffect(() => {
    dispatch(boardAction.getPostAll());
  }, []);

  // 페이지 네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  const clickPost = (postId) => nav(`/board/${postId}`, { state: { id: postId } });
  // 글쓰기 버튼 클릭시 write 페이지로 보내줌
  const writePost = () => {
    nav("/board/write");
  };
  return (
    <>
      <div className="flex justify-center items-center mt-28">
        <table className="w-3/5">
          <thead>
            <tr className="grid-rows-4 text-center bg-gray-100 h-12 border-[1px] border-b-black">
              <td>번호</td>
              <td>제목</td>
              <td>글쓴이</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ postId, title, createdAt, writer }) => (
              <tr key={postId} className="grid-rows-4 text-center h-12 border-[1px] border-b-black">
                <td className="w-36">{postId}</td>
                <td>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      clickPost(postId);
                    }}
                  >
                    {title}
                  </div>
                </td>
                <td>{writer}</td>
                <td>{createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
      </div>
      <div className="w-4/5">
        <button className="float-right justify-center items-center bg-yellow-200 p-3 rounded-xl my-4" onClick={writePost}>
          글쓰기
        </button>
      </div>
    </>
  );
};

export default Board;
