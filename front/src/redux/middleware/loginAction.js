import axios from "axios";

function login(id, pw) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      // 여기서 id, pw 데이터를 요청하면 백에서 받는거임
      data: {
        id,
        pw,
      },
    }); // 나중에 aws 배포했을 때 url 여기다 쓰면 됨
    console.log(user);
    if (user.data) {
      dispatch({ type: "LOGIN", payload: { id, pw } });
    } else {
      alert("없는 아이디임 회원가입 하세요");
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

function signUp(id, pw, setWrap) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/signUp",
      // 여기서 id, pw 데이터를 요청하면 백에서 받는거임
      data: {
        id,
        pw,
      },
    }); // 나중에 aws 배포했을 때 url 여기다 쓰면 됨
    console.log(user);
    alert(user.data);
    if (user.data === "너 가입됨") {
      setWrap();
    }
  };
}

export const loginAction = { login, signUp, logOut };
