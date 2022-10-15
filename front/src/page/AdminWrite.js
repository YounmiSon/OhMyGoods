import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminWrite = () => {
  const dispatch = useDispatch;
  const loginUser = useSelector((state) => state.loginUser);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const submitHandler = () =>
    dispatch({
      type: "ADDPOST",
      payload: { ...inputs },
    });

  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={inputsHandler}
          className="border-[1px] border-black w-[50%]"
        />
        <label className="mt-4">내용</label>
        <textarea
          name="content"
          value={inputs.content}
          onChange={inputsHandler}
          className="border-[1px] border-black w-[50%] h-80"
        />
        <button
          onClick={submitHandler}
          className="justify-center items-center bg-yellow-200 p-3 rounded-xl mt-4"
        >
          등록하기
        </button>
      </div>
    </>
  );
};

export default AdminWrite;
