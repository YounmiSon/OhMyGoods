const init = {
  items: [],
  productDetails: {},
  isSelected: false,
};

function cartReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {

    case "ADDPRODUCT":
      const newProduct = { ...payload };
      console.log(newProduct);
      return {
        ...state,
        items: [...state.items, newProduct],
      }; 

    case "ADDCART":
      return { ...state, isSelected: true };

    case "GETPRODUCT":
      return { ...state, items: [...payload] };

    case "GET_PRODUCT_DETAILS": {
      return {
        ...state,
        productDetails: { ...payload },
      };
    }

    case "DELETEPRODUCT":
      const deletedProducts = state.items.filter((item) => item.productsId !== payload);
      return { ...state, items: [...deletedProducts] };

    default:
      return { ...state };
  }
}

export default cartReducer;
