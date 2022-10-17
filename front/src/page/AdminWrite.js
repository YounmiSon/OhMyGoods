// 공지사항 - admin(관리자) 계정만 글 작성할 수 있는 화면
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { boardAction } from "../redux/actions/boardAction";

const AdminWrite = () => {
  const dispatch = useDispatch();

  // 입력되는 내용 input state에 정의(?)
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  // 입력 받은 내용 setInputs에 저장해서 변경되는 내용 감지
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 글 작성 후 제출
  // dispatch 요청 발생하면 boardAction의 addPost함수 실행
  const submitHandler = () => dispatch(boardAction.addPost());

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
