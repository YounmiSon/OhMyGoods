const init = {
  id: "",
  username: "",
  pwd: "",
  isLogin: false,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...state };

    case "LOGOUT":
      return { ...state };

    default:
      return { ...state };
  }
}
