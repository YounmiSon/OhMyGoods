// 장바구니 페이지
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  console.log(cart);

  const CartItems =
    cart.length >= 1 ? (
      cart.map((item, idx) => {
        return (
          <>
            <ul key={idx} className="w-[800px] flex justify-evenly items-center p-4 border-[1px] border-b-black">
              <li className="font-bold">{idx + 1}</li>
              <li>{item.data.cartProductName}</li>
              <li>{item.data.cartProductPrice}</li>
              <li>{idx}</li>
              <button>구매</button>
              <button>삭제</button>
            </ul>
          </>
        );
      })
    ) : (
      <div>장바구니가 비어 있습니다</div>
    );
  return (
    <>
      <div className="mt-28 flex flex-col justify-center items-center">
        <ul className="w-[800px] flex justify-evenly items-center p-4 border-[1px] border-b-black">
          <li>번호</li>
          <li>제품명</li>
          <li>가격</li>
          <li>수량</li>
          <button>구매</button>
          <button>삭제</button>
        </ul>
        <div>{CartItems}</div>
      </div>
    </>
  );
};

export default Cart;
