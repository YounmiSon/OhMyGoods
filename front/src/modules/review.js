import axios from "axios";

// 액션 타입
const ADD_REVIEW = "review/ADD_REVIEW";
const DELETE_REVIEW = "review/DELETE_REVIEW";
const EDIT_REVIEW = "review/EDIT_REVIEW";

// 액션 생성함수
export const addReview = ({ title, content, writer }, nav) => {
  return async (dispatch, getState) => {
    const review = await axios({
      method: "post",
      url: "http://localhost:8000/admin/board/write",
      data: {
        title,
        content,
        writer,
      },
    });
    if (title === "" || content === "") {
      alert("공백안됨");
    } else {
      nav("/shop");
    }
  };
};

// 초기값
const init = {
  nextReviewId: 1,
  reviews: [],
  loginUser: {},
};

// 리듀서
export default function review(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_REVIEW":
      const newReview = { ...payload, id: state.nextReviewId };
      state.nextReviewId++;
      return {
        ...state,
        reviews: [...state.reviews, newReview],
      };

    case "DELETE_REVIEW":
      const deletedReviews = state.reviews.filter((review) => review.id !== payload);
      return { ...state, reviews: [...deletedReviews] };

    case "EDIT_REVIEW":
      const editedReviews = state.reviews.map((review) => (review.id === payload.id ? payload : review));
      return { ...state, reviews: [...editedReviews] };

    default:
      return state;
  }
}
