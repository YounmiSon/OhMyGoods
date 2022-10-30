const init = {
  nextReviewId: 1,
  reviews: [],
  loginUser: {},
};

const reviewReducer = (state = init, action) => {
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
};
export default reviewReducer;
