import axios from "axios";

// 액션 타입
const ADD_CART = "cart/ADD_CART";
const ADD_PRODUCT = "cart/ADD_PRODUCT";
const GET_PRODUCT = "cart/GET_PRODUCT";
const GET_PRODUCT_DETAILS = "cart/GET_PRODUCT_DETAILS";
const DELETE_PRODUCT = "cart/DELETE_PRODUCT";

// 액션 생성 함수
export const addItems = (uploader, formData, config, nav) => {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "post",
      url: "http://localhost:8000/shop/add",
      data: formData,
      uploader,
      config,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
    dispatch({ type: GET_PRODUCT, payload: data });
  };
};

// 상품 조회
export const getProduct = (id) => {
  return async (dispatch, getState) => {
    await axios({
      method: "post",
      url: `http://localhost:8000/shop/details`,
      data: {
        productsId: id,
      },
    }).then((res) => {
      const data = res.data;
      dispatch({ type: GET_PRODUCT_DETAILS, payload: data });
    });
  };
};

// 장바구니에 담기
export const addCart = (items) => {
  return async (dispatch, getState) => {
    await axios({
      method: "post",
      url: "http://localhost:8000/shop/cart",
      data: {
        nickname: items.uploader,
        productsId: items.productsId,
        cartProductImg: items.productsImg,
        cartProductName: items.productsName,
        cartProductPrice: items.productsPrice,
      },
    })
      .then((res) => {
        const data = res;
        console.log(res);
        dispatch({ type: ADD_CART, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
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
    dispatch({ type: DELETE_PRODUCT, payload: data });
  };
};

// 초기 상태
const init = {
  items: [],
  productDetails: {},
  cartItems: [],
};

// 리듀서
export default function cart(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART:
      const addedItems = { ...payload };
      console.log(addedItems);
      return { ...state, cartItems: [...state.cartItems, addedItems] };

    case ADD_PRODUCT:
      const newProduct = { ...payload };
      return {
        ...state,
        items: [...state.items, newProduct],
      };

    case GET_PRODUCT:
      return { ...state, items: [...payload] };

    case GET_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetails: { ...payload },
      };
    }
    case DELETE_PRODUCT:
      const deletedProducts = state.items.filter((item) => item.productsId !== payload);
      return { ...state, items: [...deletedProducts] };

    default:
      return { ...state };
  }
}
