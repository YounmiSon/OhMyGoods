import React from "react";

const CartItems = () => {
  return (
    <>
      <td>
        <img alt="cart-item" src="/img/ex.jpg" className="w-[100px]" />
      </td>
      <td>
        <span className="p-8">할짝 농담곰</span>
      </td>
      <td>
        <span className="p-8">10,000원</span>
      </td>
      <td>
        <button className="border-[1px] border-black w-8 p-2">X</button>
      </td>
    </>
  );
};

export default CartItems;
