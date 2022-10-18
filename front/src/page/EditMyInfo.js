// 마이페이지 회원정보 수정
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const EditMyInfo = () => {
  const nav = useNavigate();
  // 앞선 유저 정보 불러오기

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
    <div className="flex flex-col justify-center items-center mt-28 w-screen">
      <img className="w-96 my-8 rounded-full" src={imageSrc ? imageSrc : "/img/default_profile.png"} alt="profile" />
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
