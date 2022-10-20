// 상품 DB만들어서 여기랑 연결해서 보여줘야 됨
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => setProducts(res.productList));
  }, []);

  const itemList = products.map((item) => {
    return <Items key={item.id} item={item} />;
  });

  return (
    <div className="flex justify-center items-center mt-28">
      {/* 장바구니는 리모콘으로 따라다니게 스크롤 이벤트 줘보기*/}
      <div className="fixed w-28 h-28 shadow-lg border-gray border-[1px] top-44 left-0">
        <Link to="/shop/cart">
          <img src="https://cdn-icons-png.flaticon.com/512/6276/6276043.png" alt="cart_icon" className="relative ml-3 mt-2 cursor-pointer w-[80px]" />
        </Link>
      </div>
      <div className="w-screen flex flex-wrap justify-center items-center">{itemList}</div>
    </div>
  );
};

export default Shop;
