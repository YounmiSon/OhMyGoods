// 마이페이지 회원정보 수정
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditMyInfo = () => {
  const nav = useNavigate();
  // 앞선 유저 정보 불러오기
  const nickname = useSelector((state) => state.loginReducer.nickname);
  // 변경된 내용(프사, 닉네임) 반영하기

  // 프로필 사진 변경 및 반영 -> 저장이랑 default 이미지 확인하기
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  // 파일에서 이미지 선택하기 눌었을 때
  const onChangeImage = () => {
    // FileReader는 비동기적으로 데이터를 읽기 위해 읽을 파일을 가리키는 File혹은 Blob객체를 이용해
    // 파일의 내용을 읽고 사용자 컴퓨터에 저장하는 것을 가능하게 한다 -> 즉,클라이언트단에서 file이랑 blob 사용할 수 있게 해준다
    const reader = new FileReader();
    // 업로드 했을 때 첫번째 인덱스에 있는 이미지 선택
    const file = imgRef.current.files[0];

    // base64로 인코딩, readAsDataURL -> 이거는 주로 이미지에 이용됨
    reader["readAsDataURL"](file);
    // 로딩이 완료된 이후에 인코딩된 이미지를 보여준다는 뜻/loadstart, onprogress 등도 있음
    reader.onloadend = () => {
      // base64 인코딩된 값
      setImageSrc(reader.result);
    };
  };
  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <div className="flex bg-white/70 w-[700px] justify-center items-center border-[2px] rounded-xl">
        <div className="mx-10">
          <img className="w-56 my-6 ml-8 rounded-full" src={imageSrc ? imageSrc : "/img/default_profile.png"} alt="profile" />
        </div>
        <div className="flex flex-col items-start ml-12">
          <div className="mb-3">
            <label className="text-xl">닉네임</label>
            <input type="text" className="bg-white shadow-md w-40 h-8 ml-2" placeholder={nickname} />
          </div>

          <div>
            <label className="text-xl">프로필 이미지</label>
            <br />
            <input ref={imgRef} onChange={onChangeImage} type="file" className="ml-2" />
          </div>
          <input
            type="submit"
            value="수정완료"
            className="cursor-pointer bg-[#816bff]/70 text-white ml-20 mt-8 p-3 rounded-xl"
            onClick={() => {
              nav("/mypage");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditMyInfo;
