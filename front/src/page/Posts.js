import React, { useState } from "react";
import useNavigate from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { boardAction } from "../redux/actions/boardAction";
import Board from "./board";

const Posts = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // writer에 주려면 login에서 nickname을 가져와줘야 한다
  const loginUser = useSelector((state) => state.loginUser);
  const posts = useSelector((state) => state.posts);

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = () => {
    dispatch(boardAction.addPost());
  };

  return (
    <div>
      <h1>Posts</h1>
      <label>제목</label>
      <input name="title" onChange={inputsHandler} value={inputs.title} />
      <br />
      <label>내용</label>
      <input name="content" onChange={inputsHandler} value={inputs.content} />
      <br />
      <button onClick={submitHandler}>제출</button>
      <h1>게시판</h1>
      {posts.map((post) => (
        <Board key={post.id} post={post}></Board>
      ))}
    </div>
  );
};

export default Posts;
