import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { boardAction } from "../redux/actions/boardAction";

const Detail = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // post 가져오는데 postId가 일치하는 것만(?) 가져와야됨
  const posts = useSelector((state) => state.boardReducer.posts);
  const postDetails = useSelector((state) => state.boardReducer.postDetails);
  //console.log(posts);

  useEffect(() => {
    // 여기서 uselocation으로 id 값을 각각 가져오면 됨
    const id = location.pathname.split("/board/")[1];
    dispatch(boardAction.getPost(id));
  }, []);

  // post 수정
  const editPost = () => {
    nav("/board/edit");
  };

  // post 삭제
  const deletePost = () => {
    
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28 ">
        <div className="flex items-center justify-center h-12 bg-gray-200 w-3/5 border-b-black border">
          <h1 className="text-2xl">{postDetails.title}</h1>
        </div>
        <div className="flex justify-between items-center h-12 w-3/5 border-b-black border">
          <span className="ml-12">작성일 : {postDetails.createdAt}</span>
          <span className="mr-12">글쓴이 : {postDetails.writer}</span>
        </div>
        <p className="w-3/5 h-[500px] border-b-black border text-justify p-12 text-xl">{postDetails.content}</p>
        <div className="mt-8">
          <button onClick={editPost} className="mr-4 w-16 h-12 bg-slate-300 text-center pt-1 rounded-lg">
            수정
          </button>
          <button onClick={deletePost} className="w-16 h-12 bg-slate-300 text-center pt-1 rounded-lg">
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
