import axios from "axios";

// 물건 등록하기
function addItems(formData, config, nav) {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "post",
      url: "http://localhost:8000/shop/add",
      data: formData,
      config,
    });
  };
}

// 물건 그리기
function getProductAll() {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "get",
      url: "http://localhost:8000/shop/",
    });
    const { data } = product;
    dispatch({ type: "GETPRODUCT", payload: data });
  };
}

// 상품 조회
function getProduct(id) {
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
}

// 장바구니에 담기
function addCart({ item }) {
  return async (dispatch, getState) => {
    const items = await axios({
      method: "post",
      url: "http://localhost:8000/shop/cart",
      data: {
        isSelected: true,
      },
    });
    const { data } = items;
    dispatch({ type: "ADDCART", payload: data });
  };
}

function deleteProduct(id) {
  return async (dispatch, getState) => {
    const product = await axios({
      method: "get",
      url: `http://localhost:8000/shop/delete/${id}`,
      data: {
        productsId: id,
      },
    });
    const { data } = product;
    dispatch({ type: "DELETEPRODUCT", payload: data });
  };
}
export const cartAction = { addItems, addCart, getProductAll, getProduct, deleteProduct };
