import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const nav = useNavigate();
  const [user, setUser] = useState();
  
  // 수정하기 누르면 이동시키기
  const editUserInfo = () => {
    nav("/mypage/edit");
  };

  // 닉네임 가져와서 수정하기 

  // 프로필 사진 수정한 다음 저장하기
  
  return (
    <>
      <div className="flex justify-center items-center mt-12 w-screen">
        <div className="mx-10">
          <img
            className="w-96 my-8 rounded-full"
            src="/img/default_profile.png"
            alt="profile"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-10">마이페이지</h1>
          <span className="text-2xl">닉네임 : user1</span>
          <span className="text-2xl">보유포인트: 1000p</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <input
          onClick={editUserInfo}
          type="submit"
          value="수정하기"
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default Mypage;
