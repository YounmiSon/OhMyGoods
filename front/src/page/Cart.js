// 장바구니 페이지
import React from "react";
import { useSelector } from "react-redux";
// import CartItems from "../components/CartItems";/

const Cart = () => {
  // store 구독하기
  const cart = useSelector((store) => store.cartReducer);
  const CartItems =
    cart.length >= 1 ? (
      cart.map((item, idx) => {
        return <CartItems key={idx} item={item} idx={idx} />;
      })
    ) : (
      <div>장바구니가 비어 있습니다</div>
    );
  return <div className="flex flex-col justify-center items-center mt-28">{CartItems}</div>;
};

export default Cart;
