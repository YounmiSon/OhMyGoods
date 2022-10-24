// 상품 DB만들어서 여기랑 연결해서 보여줘야 됨
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartAction } from "../redux/actions/cartAction";

const Shop = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.items);

  useEffect(() => {
    dispatch(cartAction.getProductAll());
  }, []);

  const showProductDetail = (productsId) => nav(`/shop/${productsId}`, { state: { id: productsId } });

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="fixed bg-white  w-28 h-28 border-gray border-[1px] top-44 left-0">
        <Link to="/shop/cart">
          <img src="./img/icon/buy.png" alt="cart_icon" className="relative ml-3 mt-2 cursor-pointer w-[80px]" />
        </Link>
      </div>
      <div className="bg-white fixed w-28 h-28 shadow-lg border-gray border-[1px] top-72 left-0">
        <Link to="/shop/add">
          <img src="./img/icon/add.png" alt="cart_icon" className="relative ml-3 mt-2 cursor-pointer w-[80px]" />
        </Link>
      </div>

      <div className="w-screen flex flex-wrap justify-center items-center">
        {items.map(({ productsImg, productsId, productsName, productsPrice }, idx) => (
          <div key={idx} className="w-[340px] h-[450px] m-6 rounded-xl bg-indigo-100">
            <div className="flex flex-col items-center justify-center mx-10 mt-3">
              <div className="flex justify-center items-center">
                <img className="mt-6 rounded-xl" alt="product" src={productsImg} />
              </div>
              <div className=" text-center w-[250px] h-[70px] mt-6">
                <h1 className="text-center font-bold text-2xl">{productsName}</h1>
                <div className="text-xl pt-1">{productsPrice}P</div>
              </div>
              <div>
                <button
                  onClick={(item) => {
                    console.log("!!!");
                    dispatch(cartAction.addCart(item));
                  }}
                  className="bg-white rounded-lg p-2 mr-3 text-m"
                >
                  구매
                </button>
                <button
                  onClick={() => {
                    showProductDetail(productsId);
                  }}
                  className="bg-white rounded-lg p-2 text-m"
                >
                  상세보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
