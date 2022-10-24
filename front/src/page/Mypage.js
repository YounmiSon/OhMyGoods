// import { useState } from "react";ㄴㄴ
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const nav = useNavigate();

  // 수정하기 누르면 이동시키기
  const editUserInfo = () => {
    nav("/mypage/edit");
  };

  // 닉네임 가져오기
  const nickname = useSelector((state) => state.loginReducer.nickname);

  // 포인트 가져오기
  const point = useSelector((state) => state.loginReducer.point);

  // 프로필 사진 수정한 다음 저장

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">
        <div className="flex justify-center items-center border-[2px] rounded-xl">
          <div className="mx-10">
            <img className="w-56 my-6 rounded-full" src="/img/default_profile.png" alt="profile" />
          </div>
          <div className="flex flex-col items-start mx-10">
            <span className="text-xl">닉네임 : {nickname}</span>
            <span className="text-xl">보유포인트: {point}</span>
            <div>
              <input onClick={editUserInfo} type="submit" value="수정하기" className="cursor-pointer bg-indigo-200 ml-8 mt-2 p-3 rounded-xl" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="my-8 text-xl">포인트 사용내역</h1>
            <table className="w-[800px]">
              <thead>
                <tr className="grid-rows-3 text-center bg-gray-100 h-12 border-[1px] border-b-black">
                  <td>상품 이름</td>
                  <td>사용 포인트</td>
                  <td>잔여 포인트</td>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
