import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Mypage = ({ user }) => {
  const nav = useNavigate();

  const { id } = user || {};
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    reader["readAsDataURL"](file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };
  const isEditing = () => {
    nav("/mypage/edit");
  };

  return (
    <>
      <div className="flex justify-center items-center mt-12 w-screen">
        <div className="mx-10">
          <img
            className="w-96 my-8 rounded-full"
            src={imageSrc ? imageSrc : "/img/default_profile.png"}
            alt="profile"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-10">username의 마이페이지</h1>
          <span className="text-2xl">닉네임 : user1</span>
          <span className="text-2xl">보유포인트: 1000p</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value="수정하기"
          onClick={isEditing}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default Mypage;
