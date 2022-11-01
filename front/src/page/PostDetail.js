import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPost } from "../modules/board";

const PostDetail = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // post 가져오는데 postId가 일치하는 것만(?) 가져와야됨
  const posts = useSelector((state) => state.board.posts);
  const postDetails = useSelector((state) => state.board.postDetails);
  //console.log(posts);

  useEffect(() => {
    // 여기서 uselocation으로 id 값을 각각 가져오면 됨
    const id = location.pathname.split("/board/")[1];
    dispatch(getPost(id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28 ">
        <div className="flex items-center justify-center h-16 bg-white w-3/5 border-b-black border">
          <h1 className="text-2xl font-bold">{postDetails.title}</h1>
        </div>
        <div className="flex justify-between items-center h-12 w-3/5 border-b-black border">
          <span className="ml-12">작성일 : {postDetails.createdAt}</span>
          <span className="mr-12">글쓴이 : {postDetails.writer}</span>
        </div>
        <p className="w-3/5 h-[500px] break-words border-b-black border text-justify p-12 text-xl">{postDetails.content}</p>
      </div>
    </>
  );
};

export default PostDetail;
