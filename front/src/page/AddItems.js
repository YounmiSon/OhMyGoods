import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UploadImg } from "../components";
import { cartAction } from "../redux/actions/cartAction";

const AddItems = () => {
  const [inputs, setInputs] = useState({
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
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="text-xl mb-4">상품 등록하기</h1>
        <div className="w-[800px] flex flex-col justify-center items-center">
          <div>
            <label>상품 이름</label>
            <br />
            <input name="productsName" value={inputs.productsName} onChange={inputsHandler} placeholder="상품 이름을 입력하세요" className="bg-slate-100 w-96 h-10 mb-4" />
          </div>
          <div>
            <label>상품 가격</label>
            <br />
            <input name="productsPrice" value={inputs.productsPrice} onChange={inputsHandler} placeholder="숫자만 입력 가능합니다" className="bg-slate-100 w-96 h-10 mb-4" />
          </div>
          <div>
            <label>상품 설명</label>
            <br />
            <textarea name="productsDetail" value={inputs.productsDetail} onChange={inputsHandler} placeholder="상품을 간략히 설명해주세요" className="bg-slate-100 w-96 h-56 mb-4" />
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
    </>
  );
};

export default AddItems;
