import axios from "axios";

// 액션 타입
const ADD_CART = "cart/ADD_CART";
const ADD_PRODUCT = "cart/ADD_PRODUCT";
const GET_PRODUCT = "cart/GET_PRODUCT";
const GET_PRODUCT_DETAILS = "cart/GET_PRODUCT_DETAILS";
const DELETE_PRODUCT = "cart/DELETE_PRODUCT";

// 액션 생성 함수
export const addItems = (formData, config, nav) => {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "post",
      url: "http://localhost:8000/shop/add",
      data: formData,
      config,
    });
  };
};

// 물건 그리기
export const getProductAll = () => {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "get",
      url: "http://localhost:8000/shop/",
    });
    const { data } = product;
    dispatch({ type: "GET_PRODUCT", payload: data });
  };
};

// 상품 조회
export const getProduct = (id) => {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "post",
      url: `http://localhost:8000/shop/details`,
      data: {
        productsId: id,
      },
    });
    const { data } = product;
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
  };
};

// 장바구니에 담기
export const addCart = ({ item }) => {
  return async (dispatch, getState) => {
    const items = await axios({
      method: "post",
      url: "http://localhost:8000/shop/cart",
      data: {
        isSelected: true,
      },
    });
    const { data } = items;
    dispatch({ type: "ADD_CART", payload: data });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "get",
      url: `http://localhost:8000/shop/delete/${id}`,
      data: {
        productsId: id,
      },
    });
    const { data } = product;
    dispatch({ type: "DELETE_RODUCT", payload: data });
  };
};

// 초기 상태
const init = {
  items: [],
  productDetails: {},
};

// 리듀서
export default function cart(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CART":
      return { ...state };

    case "ADD_PRODUCT":
      const newProduct = { ...payload };
      console.log(newProduct);
      return {
        ...state,
        items: [...state.items, newProduct],
      };

    case "GET_PRODUCT":
      return { ...state, items: [...payload] };

    case "GET_PRODUCT_DETAILS": {
      return {
        ...state,
        productDetails: { ...payload },
      };
    }

    case "DELETE_PRODUCT":
      const deletedProducts = state.items.filter((item) => item.productsId !== payload);
      return { ...state, items: [...deletedProducts] };

    default:
      return { ...state };
  }
}
