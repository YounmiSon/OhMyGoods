import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const EditMyInfo = ({ user }) => {
  const nav = useNavigate();
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
  return (
    <div className="flex flex-col justify-center items-center mt-12 w-screen">
      <img
        className="w-96 my-8 rounded-full"
        src={imageSrc ? imageSrc : "/img/default_profile.png"}
        alt="profile"
      />
      <div>
        <label>닉네임</label>
        <input type="text" className="border-black border-[1px]" />
      </div>
      <div>
        <label>프로필 이미지</label>
        <input ref={imgRef} onChange={onChangeImage} type="file" />
      </div>

      <input
        type="submit"
        value="수정완료"
        className="cursor-pointer border-black border-[1px]"
        onClick={() => {
          nav("/mypage");
        }}
      />
    </div>
  );
};

export default EditMyInfo;
