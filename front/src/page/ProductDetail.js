import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { cartAction } from "../redux/actions/cartAction";
import { Review } from "../components";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const items = useSelector((state) => state.cartReducer.items);
  const productDetails = useSelector((state) => state.cartReducer.productDetails);

  useEffect(() => {
    const id = location.pathname.split("/shop/")[1];
    dispatch(cartAction.getProduct(id));
  }, []);

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  const deleteProduct = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(cartAction.deleteProduct(location.pathname.split("/shop/")[1]));
      window.location.href = "/shop";
    } else {
      window.location.reload();
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">
        <img alt="productImg" src={productDetails.productsImg} className="w-1.5/5 border-gray border-[2px] rounded-xl" />
        <h1 className="mt-12 text-3xl font-bold">{productDetails.productsName}</h1>
        <span className="my-2">필요 포인트 : {productDetails.productsPrice}P</span>
        <span>상세 설명 : {productDetails.productsDetail}</span>
        <div>
          <button
            onClick={(item) => {
              console.log("!!!");
              dispatch(cartAction.addCart(item));
            }}
            className="w-16 h-12 bg-slate-300 text-center pt-1 mr-2 rounded-lg"
          >
            구매
          </button>
          <button onClick={deleteProduct} className="w-16 h-12 bg-slate-300 text-center pt-1 rounded-lg">
            삭제
          </button>
        </div>
        <Review />
      </div>
    </>
  );
};

export default ProductDetail;
