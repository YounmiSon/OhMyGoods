const init = {
  items: [],
};

const cartReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDCART":
      return { ...state, items: payload.items };

    default:
      return { ...state };
  }
};
export default cartReducer;
