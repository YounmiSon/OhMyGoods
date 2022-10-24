import React, { useRef } from "react";

const Review = () => {
  //   const imgRef = useRef();
  //   const clickedRate = () => {
  //     imgRef.style.display.block;
  //   };
  const submitReview = () => {
    console.log("등록됨");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <div>
          <div className="flex items-center justify-center bg-slate-100 w-28 h-12 text-lg text-center mb-2">별점</div>
          <div className="flex items-center justify-center bg-slate-100 w-28 h-12 text-lg text-center ">후기</div>
        </div>

        {/*ref 태그 써서 눌린 갯수에 숫자 1할당하고 이거를 db에 저장해서 계산+불러오기 해야할듯 구글링 해보기 */}
        <div>
          <div className="flex cursor-pointer m-4">
            <img alt="heart" src="../img/icon/heart_on.png" />
            <img alt="heart" src="../img/icon/heart_on.png" />
            <img alt="heart" src="../img/icon/heart_on.png" />
            <img alt="heart" src="../img/icon/heart_on.png" />
            <img alt="heart" src="../img/icon/heart_on.png" />
          </div>
          {/*이 회면에서 등록, 수정, 삭제 다 가능하게 만들기 아래에 보여지게 만들면 될듯 */}
          <div className="m-4">
            <input className="border-[1px] border-black" name="review" />
            <button onClick={submitReview} className="bg-indigo-200 p-2 rounded-xl m-2">
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
