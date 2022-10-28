import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { boardAction } from "../redux/actions/boardAction";
const Board = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // posts는 reducer에 있는 초기값([]) posts
  const posts = useSelector((state) => state.boardReducer.posts);

  // boardAction에 있는 getPost함수 실행
  useEffect(() => {
    dispatch(boardAction.getPostAll());
  }, []);

  // postId 인자로 받아서 글 가져오기
  const clickPost = (postId) => nav(`/board/${postId}`, { state: { id: postId } });

  // 페이지 네이션
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(5);

  const currentPage = useSelector((state) => state.boardReducer.currentPage);
  const postsPerPage = useSelector((state) => state.boardReducer.postsPerPage);
  const currentPosts = useSelector((state) => state.boardReducer.currentPosts);
  const setCurrentPage = () => dispatch(boardAction.setPage());

  // const indexOfLast = currentPage * postsPerPage;
  // const indexOfFirst = indexOfLast - postsPerPage;

  // const currentPosts = (posts) => {
  //   let currentPosts = 0;
  //   currentPosts = posts.slice(indexOfFirst, indexOfLast);
  //   return currentPosts;
  // };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="text-3xl my-4 font-bold">공지사항</h1>
        <table className="w-3/5">
          <thead>
            <tr className="text-center bg-white h-12 border-[1px] border-b-black">
              <td>번호</td>
              <td className="w-[300px]">제목</td>
              <td>글쓴이</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ postId, title, createdAt, writer }) => (
              <tr key={postId} className="text-center h-12 border-[1px] border-b-black">
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
    </>
  );
};

export default Board;
