import axios from "axios";

function join(email, nickname, password, nav) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/join",
      data: {
        email,
        nickname,
        password,
      },
    });
    if (email === user.data.email) {
      alert("이미 존재하는 이메일입니다");
      window.location.reload();
    } else {
      alert("가입완료!");
      nav("/login");
    }
  };
}

function login(email, password, nav) {
  // 여기서 미들웨어가 쓰임 redu-thunk return되는 함수가 thunk 미들웨어 함수인거임
  // 액션을 자바스크립트 객체 뿐만아니라 함수로 보내는 것
  // 왜냐면 액션은 객체라서 기본적으로 동기이기 때문에 미들웨어를 쓴다 즉, 액션으로 함수를 보냈을 때 이를 실행함,
  // store에서 dispatch와 getState를 써줌
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        email,
        password,
      },
    });
    if (user.data === false) {
      alert("존재하지 않는 이메일입니다");
    } else {
      const data = user.data;
      dispatch({ type: "LOGIN", payload: { email, password, data } });
      nav("/");
    }
  };
}

function logOut() {
  return (dispatch, getState) => {
    if (getState().loginReducer.isLogin) {
      dispatch({ type: "LOGOUT" });
    } else if (getState().loginReducer.isAdmin) {
      dispatch({ type: "LOGOUT" });
    }
  };
}

function getUser() {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "get",
      url: "http://localhost:8000/admin/user",
    });
    const { data } = user;
    dispatch({ type: "GETUSER", payload: data });
  };
}
function deleteUser(userId) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "get",
      url: `http://localhost:8000/admin/user/${userId}`,
      data: {
        userId,
      },
    });
    const { data } = user;
    dispatch({ type: "DELETEUSER", payload: data });
  };
}

export const loginAction = { join, login, logOut, getUser, deleteUser };
