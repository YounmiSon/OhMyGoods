import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";
  
// AddItems에서 props로 {inputs}를 받아왔다 컴포넌트를 분리해서 어쩔 수 없었음
const UploadImg = ({ inputs }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [files, setFiles] = useState();

  const registerItem = () => {
    // 여기서 formData 설정
    // formData 객체는 페이지 전환 없이 폼 데이터를 제출, 주로 이미지 업로드 시 사용
    let formData = new FormData();
    const config = {
      // 인코딩 타입 설정
      header: { "content-type": "multipart/form-data" },
    };

    // formData에 file 넣어줌
    // append 메서드에 ("키", 값) 형식으로 추가해준다
    formData.append("file", files);
    // console.log(files.name); -> 이미지 파일의 이름이 찍힌다
    inputs.productsImg = files.name;

    // 받아온 inputs 할당
    const { productsName, productsPrice, productsDetail, productsImg } = inputs;
    // 근데 자꾸 [object Object] 로 찍혀서 그냥 다 쪼개서 append해줌
    formData.append("productsName", productsName);
    formData.append("productsPrice", productsPrice);
    formData.append("productsDetail", productsDetail);
    formData.append("productsImg", productsImg);

    // 공백 막기
    if (productsName === "" || productsPrice === "" || productsDetail === "" || productsImg === "") {
      alert("필수입력사항 입니다");
      nav("/shop/add");
    } else {
      // dispatch로 formdata, config, nav 다 보내기
      dispatch(cartAction.addItems(formData, config, nav));
      nav("/shop");
    }
  };

  return (
    <>
      <div>
        <input
          type="file"
          name="imgUpload"
          className="w-96 h-10"
          onChange={(e) => {
            setFiles(e.target.files[0]);
          }}
        />
        <button onClick={registerItem} className="bg-indigo-100 p-4 rounded-xl">
          등록하기
        </button>
      </div>
    </>
  );
};

export default UploadImg;
