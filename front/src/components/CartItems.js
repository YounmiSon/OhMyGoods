import React from "react";

const CartItems = () => {
  return (
    <>
      <img alt="cart-item" src="/img/ex.jpg" className="w-[100px]" />
      <span className="p-8">할짝 농담곰</span>
      <span className="p-8">10,000원</span>
      <button className="border-[1px] border-black w-8 p-2">X</button>
    </>
  );
};

export default CartItems;
