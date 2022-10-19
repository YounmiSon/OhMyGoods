// 초기값 설정
const init = {
  email: "",
  password: "",
  nickname: "",
  isLogin: false,
};

// 리듀서 함수 정의, 파라미터로 state, action을 받는다
function loginReducer(state = init, action) {
  // 액션 생성할거임 여기서 구조분해할당 해두면 깔끔하게 쓸 수 있다
  const { type, payload } = action;
  // 여기서 type이름 바로 지정하고 함수를 정의해줌
  switch (type) {
    case "LOGIN":
      return {
        // 현재의 상태
        ...state,
        // 전달 받은 액션을 참고해서 새로운 상태를 만들어 반환한다
        email: payload.email,
        password: payload.pwd,
        nickname: payload.nickname,
        isLogin: true,
      };

    case "LOGOUT":
      return { ...state, email: "", password: "", isLogin: false };

    default:
      // 기존 state를 그대로 반환
      return { ...state };
  }
}

export default loginReducer;
