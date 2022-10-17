import axios from "axios";

function join(email, nickname, password) {
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
    console.log(user);
  };
}

function login(email, password, nav) {
  // 여기서 미들웨어가 쓰임 redu-thunk
  // return되는 함수가 thunk 미들웨어 함수인거임
  // 액션을 자바스크립트 객체 뿐만아니라 함수로 보내는 것
  // 즉, 액션으로 함수를 보냈을 때 이를 실행함,
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
    if (user.data) {
      dispatch({ type: "LOGIN", payload: { email, password } });
      nav("/");
    } else {
      alert("아이디와 비밀번호를 확인하세요");
    }
  };
}

function logOut() {
  return (dispatch, getState) => {
    if (getState().loginReducer.isLogin) {
      dispatch({ type: "LOGOUT" });
    }
  };
}
export const loginAction = { join, login, logOut };
