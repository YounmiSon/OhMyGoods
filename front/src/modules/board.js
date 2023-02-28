// 모듈 불러오기
import axios from "axios";

// 액션 타입(다른 모듈과 이름 중복되지 않게 하려고 덕스 패턴에서 액션 타입 정의할 때는 접두사를 붙인다)
const GET_POST_DETAILS = "board/GET_POST_DETAILS";
const GET_POST = "board/GET_POST";
const ADD_POST = "board/ADD_POST";
const EDIT_POST = "board/EDIT_POST";
const DELETE_POST = "board/DELETE_POST";
const SET_PAGE = "board/SET_PAGE";

// 액션 생성 함수
export const addPost = async ({ title, content, writer }, nav) => {
  await axios({
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
    nav("/admin/board/write");
  } else {
    nav("/board");
  }
};

export const getPostAll = () => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: "http://localhost:8000/board/",
    });
    const { data } = post;
    dispatch({ type: "GET_POST", payload: data });
  };
};

export const getPost = (id) => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: `http://localhost:8000/board/details`,
      data: {
        postID: id,
      },
    });
    const { data } = post;
    dispatch({ type: "GET_POST_DETAILS", payload: data });
  };
};

export const editPost = ({ postId, title, content, writer }, nav) => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: `http://localhost:8000/admin/board/edit/${postId}`,
      data: {
        postId,
        title,
        content,
        writer,
        updatedAt: Date.now(),
      },
    });
    if (post.title === "" || post.content === "") {
      alert("내용을 입력해주세요");
    } else {
      nav("/admin/board");
      alert("수정완료");
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: `http://localhost:8000/admin/board/delete/${postId}`,
      data: {
        postId,
      },
    });
    const { data } = post;
    dispatch({ type: "DELETE_POST", payload: data });
  };
};

export const setPage = (postId) => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: `http://localhost:8000/admin/board/delete/${postId}`,
      data: {
        postId,
      },
    });
    const { data } = post;
    dispatch({ type: "DELETE_POST", payload: data });
  };
};

// 모듈의 초기 상태
const init = {
  nextPostId: 1,
  posts: [],
  login: false,
  loginUser: {},
  postDetails: {},
  currentPage: 1,
  postsPerPage: 10,
  currentPosts: 0,
};

// 리듀서
export default function board(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_POST_DETAILS": {
      return {
        ...state,
        postDetails: { ...payload },
      };
    }

    case "GET_POST": {
      return {
        ...state,
        posts: [...payload],
      };
    }

    case "ADD_POST":
      const newPost = { ...payload, postId: state.nextPostId };
      console.log(newPost);
      state.nextPostId++;
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case "DELETE_POST":
      const deletedPosts = state.posts.filter((post) => post.postId !== payload);
      return { ...state, posts: [...deletedPosts] };

    case "EDIT_POST":
      const editedPosts = state.posts.map((post) => (post.postId === payload.postId ? payload : post));
      return { ...state, posts: [...editedPosts] };

    case "SET_PAGE":
      const indexOfLast = state.currentPage * state.postsPerPage;
      const indexOfFirst = indexOfLast - state.postsPerPage;
      return { ...state, currentPosts: state.posts.slice(indexOfFirst, indexOfLast) };

    default:
      return { ...state };
  }
}
