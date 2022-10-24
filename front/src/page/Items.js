// SHOP에 진열할 물건들
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../redux/actions/cartAction";
const Items = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.items);

  useEffect(() => {
    dispatch(cartAction.getProductAll());
  }, []);

  return (
    <div className="w-[340px] h-[450px] m-6 rounded-xl bg-indigo-100">
      {items.map(({ productsImg, productsName, productsPrice }, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center mx-10 mt-3">
          <div className="flex justify-center items-center">
            <img className="mt-6 rounded-xl" alt="product" src={productsImg} />
          </div>
          <h1 className="text-center mt-2 text-xl">상품이름 : {productsName}</h1>
          <div>
            <div className="text-xl pt-1">가격 : {productsPrice}원</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
