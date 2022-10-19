const init = {
  nextPostId: 1,
  posts: [],
  login: false,
  loginUser: {},
};

const boardReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GETPOST": {
      return {
        ...state,
        posts: [...payload],
      };
    }

    case "ADDPOST":
      const newPost = { ...payload, postId: state.nextPostId };
      console.log(newPost);
      state.nextPostId++;
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case "DELETEPOST":
      const deletedPosts = state.posts.filter((post) => post.id !== payload);
      return { ...state, posts: [...deletedPosts] };

    case "EDITPOST":
      const editedPosts = state.posts.map((post) => (post.id === payload.id ? payload : post));
      return { ...state, posts: [...editedPosts] };

    default:
      return { ...state };
  }
};
export default boardReducer;
