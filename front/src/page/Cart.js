// 장바구니 페이지
import React from "react";
import CartItems from "../components/CartItems";

const Cart = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <table className="w-3/5">
        <thead>
          <tr className="flex justify-evenly items-center bg-gray-100 h-12 border-[1px] border-b-black">
            <td>상품</td>
            <td>이름</td>
            <td>가격</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-evenly items-center text-center border-[1px] border-b-black">
            <CartItems />
          </tr>
          <tr className="flex justify-evenly items-center text-center border-[1px] border-b-black">
            <CartItems />
          </tr>
          <tr className="flex justify-evenly items-center text-center border-[1px] border-b-black">
            <CartItems />
          </tr>
          <tr className="flex justify-evenly items-center text-center border-[1px] border-b-black">
            <CartItems />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
