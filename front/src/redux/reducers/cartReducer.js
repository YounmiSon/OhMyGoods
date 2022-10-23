const init = {
  items: [],
};

function cartReducer(state = init, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      return {
        // 현재의 상태
        ...state,
        items: payload.items,
      };

    default:
      return { ...state };
  }
}

export default cartReducer;
