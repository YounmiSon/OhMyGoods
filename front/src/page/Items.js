// SHOP에 진열할 물건들
import React from "react";
import { useDispatch } from "react-redux";

const Items = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[340px] h-[450px] m-6 rounded-xl bg-yellow-200">
      <div className="flex justify-center items-center">
        <img className="mt-6 rounded-xl" alt="product" src={item.product_img} />
      </div>
      <div className="flex flex-col items-center justify-center mx-10 mt-3">
        <h1 className="text-center mt-2 text-xl">{item.product_name}</h1>
        <div className="text-xl pt-1">{item.price.toLocaleString()}원</div>
        <button
          onClick={() => {
            console.log("!!!");
            dispatch({ type: "ADDCART", payload: Items });
          }}
          className="bg-white rounded-lg p-2 text-m"
        >
          장바구니
        </button>
      </div>
    </div>
  );
};

export default Items;
