import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UploadImg } from "../components";

const AddItems = () => {
  const uploader = useSelector((state) => state.user.nickname);
  const [inputs, setInputs] = useState({
    uploader: uploader,
    productsName: "",
    productsPrice: "",
    productsDetail: "",
    productsImg: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#816bff]/20 w-[300px]] h-[680px] rounded-xl mt-32 shadow-md">
          <h1 className="text-2xl text-black text-center my-8 font-semibold">상품 등록하기</h1>
          <div className="w-[800px] flex flex-col justify-center items-center">
            <div>
              <label>업로더 : {uploader}</label>
              <br />
              <label>상품 이름</label>
              <br />
              <input
                name="productsName"
                value={inputs.productsName}
                onChange={inputsHandler}
                placeholder="상품 이름을 입력하세요"
                className="bg-white shadow-md rounded-md w-96 h-10 mb-4"
              />
            </div>
            <div>
              <label>상품 가격</label>
              <br />
              <input
                name="productsPrice"
                value={inputs.productsPrice}
                onChange={inputsHandler}
                placeholder="숫자만 입력 가능합니다"
                className="bg-white shadow-md rounded-md w-96 h-10 mb-4"
              />
            </div>
            <div>
              <label>상품 설명</label>
              <br />
              <textarea
                name="productsDetail"
                value={inputs.productsDetail}
                onChange={inputsHandler}
                placeholder="상품을 간략히 설명해주세요"
                className="bg-white shadow-md rounded-md w-96 h-56 mb-4"
              />
            </div>
            <div>
              <label>상품 사진</label>
              <br />
              {/* inputs props로 전달 */}
              <UploadImg inputs={inputs} />
              {/* <input type="file" name="productImg" onChange={inputsHandler} value={inputs.productsImg} className="w-96 h-10" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItems;
