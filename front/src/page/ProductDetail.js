import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Reviews } from "../components";
import { getProduct, deleteProduct, addCart } from "../modules/cart";

const ProductDetail = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  // const items = useSelector((state) => state.cartReducer.items);
  const productDetails = useSelector((state) => state.cart.productDetails);
  const nickname = useSelector((state) => state.user.nickname);

  useEffect(() => {
    const id = location.pathname.split("/shop/")[1];
    dispatch(getProduct(id));
  }, []);

  const deleteProductBtn = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deleteProduct(location.pathname.split("/shop/")[1]));
      // window.location.href = "/shop";
      alert("삭제되었습니다");
    } else {
      alert("취소되었습니다");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#816bff]/20 w-[800px] h-[450px] rounded-xl mt-28 shadow-md">
          {/* <img alt="productImg" src={productDetails.productsImg} className="w-[300px] h-[300px] bg-white border-gray border-[2px] rounded-xl mr-24" /> */}
          <img
            alt="productImg"
            src="/img/ex.jpg"
            className="w-[300px] h-[300px] bg-white border-gray border-[2px] rounded-xl mr-24"
          />
          <div className="flex  flex-col justify-center items-center">
            <h1 className="mt-12 text-3xl font-bold">{productDetails.productsName}</h1>
            <span className="my-2">필요 포인트 : {productDetails.productsPrice}P</span>
            <span>상세 설명 : {productDetails.productsDetail}</span>
            <div className="flex justify-center items-center mt-4">
              {productDetails.uploader === nickname || nickname === "관리자" ? (
                <button
                  onClick={deleteProductBtn}
                  className="w-16 h-12 bg-white text-center pt-1 rounded-lg  hover:bg-[#816bff] hover:text-white"
                >
                  삭제
                </button>
              ) : (
                <button
                  onClick={(item) => {
                    console.log("!!!");
                    dispatch(addCart(item));
                  }}
                  className="w-16 h-12 bg-white text-center pt-1 mr-2 rounded-lg  hover:bg-[#816bff] hover:text-white"
                >
                  구매
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default ProductDetail;
