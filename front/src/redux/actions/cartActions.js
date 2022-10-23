import axios from "axios";

function addCart({ item }) {
  return async (dispatch, getState) => {
    const items = await axios({
      method: "post",
      url: "http://localhost:8000/shop/cart",
      data: {
        item,
      },
    });
    const { data } = items;
    dispatch({ type: "ADD_ITEM", payload: data });
  };
}

export const cartActions = { addCart };
