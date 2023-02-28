// 상품 DB만들어서 여기랑 연결해서 보여줘야 됨
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProductAll, addCart } from "../modules/cart";

const Shop = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const productDetails = useSelector((state) => state.cart.productDetails);
  const uploader = productDetails.uploader;
  const nickname = useSelector((state) => state.user.nickname);

  useEffect(() => {
    dispatch(getProductAll());
  }, []);

  const showProductDetail = (productsId) => nav(`/shop/${productsId}`, { state: { id: productsId } });

  const addCartFunc = (items) => {
    // console.log(items);
    dispatch(addCart(items));
  };
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
        {items.map(({ productsImg, productsId, productsName, productsPrice, uploader }, idx) => (
          <div key={idx} className="w-[340px] h-[450px] m-6 rounded-xl bg-[#816bff]/20">
            <div className="flex flex-col items-center justify-center mx-10 mt-3">
              <div className="flex justify-center items-center">
                <img className="w-[250px] h-[250px] mt-6 rounded-xl bg-white" alt="product" src={productsImg} />
              </div>
              <div className=" text-center w-[250px] h-[70px] mt-7">
                <h1 className="text-center font-bold text-2xl">{productsName}</h1>
                <div className="text-xl pt-1">{productsPrice}P</div>
              </div>
              {uploader === nickname || nickname === "관리자" ? (
                <button
                  onClick={() => {
                    showProductDetail(productsId);
                  }}
                  className="bg-white rounded-lg p-2 text-m"
                  uploader={uploader}
                >
                  상세보기
                </button>
              ) : (
                <div className="flex justify-around w-40">
                  <button
                    onClick={() => {
                      showProductDetail(productsId);
                    }}
                    className="bg-white rounded-lg p-2 text-m"
                    uploader={uploader}
                  >
                    상세보기
                  </button>
                  <button
                    onClick={() => {
                      addCartFunc(items[idx]);
                    }}
                    className="bg-white rounded-lg p-2 mr-3 text-m"
                  >
                    구매
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
