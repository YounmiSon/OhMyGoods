import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import user from "../modules/user";
import Rating from "./Rating";

const Reviews = () => {
  const dispatch = useDispatch();
  const nickname = useSelector((state) => state.user.nickname);
  const reviews = useSelector((state) => state.review.reviews);

  const [inputs, setInputs] = useState({
    id: 1,
    reviews: "",
    writer: nickname,
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const submitReview = (inputs) => {
    dispatch({ type: "ADD_REVIEW", payload: { ...inputs, writer: user.nickname } });
  };
  const deleteHandler = () => dispatch({ type: "DELETE_REVIEW", payload: inputs.id });

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 border-black">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-36 h-20 text-lg text-center">별점</div>
          <div className="-mt-6 ml-4">
            <Rating />
          </div>
        </div>
        <div className="flex items-center justify-center border-t-2">
          <div className="flex items-center justify-center w-36 h-20 text-lg text-center ml-8">후기</div>
          <input name="content" onChange={inputsHandler} value={inputs.content} className="bg-white shadow-lg mt-2 ml-8 w-[200px] h-12"></input>
          <button onClick={submitReview} className="bg-[#816bff]/30 rounded-lg p-3 ml-4 mt-2">
            제출
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        {reviews.map(({ id, writer, content }, idx) => (
          <div key={id} className=" w-60 text-left p-4 my-2">
            <h1 className="font-semibold">작성자 : {inputs.writer}</h1>
            <span className="text-lg">{inputs.content}</span>{" "}
            <button onClick={deleteHandler} className="bg-indigo-100 p-2 rounded-xl ml-3">
              삭제
            </button>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Reviews;
