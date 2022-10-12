const init = {
  id: "",
  pwd: "",
  isLogin: false,
};

function loginReducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, id: payload.id, pwd: payload.pwd, isLogin: true };

    case "LOGOUT":
      return { ...state, id: "", pwd: "", isLogin: false };

    default:
      return { ...state };
  }
}

export default loginReducer;
