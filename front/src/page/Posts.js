import React, { useState } from "react";
import useNavigate from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Board from "./board";
const Posts = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
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
    dispatch({
      type: "ADDPOST",
      payload: { ...inputs, writer: loginUser.nickname },
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <label>제목</label>
      <input name="title" onChange={inputsHandler} value={inputs.title}></input>
      <br></br>
      <label>내용</label>
      <input
        name="content"
        onChange={inputsHandler}
        value={inputs.content}
      ></input>
      <br></br>
      <button onClick={submitHandler}>제출</button>
      <h1>게시판</h1>
      {posts.map((post) => (
        <Board key={post.id} post={post}></Board>
      ))}
    </div>
  );
};

export default Posts;
