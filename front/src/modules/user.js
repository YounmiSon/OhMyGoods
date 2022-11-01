import axios from "axios";

// 액션 타입
const LOGIN = "login/LOGIN";
const LOG_OUT = "login/LOG_OUT";
const GET_USER = "login/GET_USER";
const DELETE_USER = "login/DELETE_USER";

// 액션 생성 함수
export const login = (email, password, nav) => {
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
};

export const logOut = () => {
  return (dispatch, getState) => {
    if (getState().user.isLogin) {
      dispatch({ type: "LOG_OUT" });
    } else if (getState().user.isAdmin) {
      dispatch({ type: "LOG_OUT" });
    }
  };
};

export const getUser = () => {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "get",
      url: "http://localhost:8000/admin/user",
    });
    const { data } = user;
    dispatch({ type: "GET_USER", payload: data });
  };
};

export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "get",
      url: `http://localhost:8000/admin/user/${userId}`,
      data: {
        userId,
      },
    });
    const { data } = user;
    dispatch({ type: "DELETE_USER", payload: data });
  };
};

export const join = (email, nickname, password, nav) => {
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
};

// 초기값 설정
const init = {
  users: [],
  email: "",
  password: "",
  nickname: "",
  point: "",
  authority: "",
  isLogin: false,
  isAdmin: false,
};

// 리듀서
export default function user(state = init, action) {
  // 액션 생성할거임 여기서 구조분해할당 해두면 깔끔하게 쓸 수 있다
  const { type, payload } = action;
  // 여기서 type이름 바로 지정하고 함수를 정의해줌
  switch (type) {
    case "LOGIN":
      const { nickname, point, authority } = payload.data.user;
      return {
        // 현재의 상태
        ...state,
        // 전달 받은 액션을 참고해서 새로운 상태를 만들어 반환한다
        email: payload.email,
        password: payload.pwd,
        nickname: nickname,
        point: point,
        authority: authority,
        isLogin: true,
        isAdmin: authority === "관리자" ? true : false,
      };

    case "LOG_OUT":
      return { ...state, email: "", password: "", nickname: "", point: 0, authority: false, isLogin: false, isAdmin: false };

    case "GET_USER": {
      return {
        ...state,
        users: [...payload],
      };
    }
    case "DELETE_USER":
      const deletedUser = state.users.filter((user) => user.userId !== payload);
      return { ...state, users: [...deletedUser] };

    default:
      // 기존 state를 그대로 반환
      return { ...state };
  }
}
