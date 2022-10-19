import axios from "axios";

// action 함수 인자로 필요한 것 전달
function addPost({ title, content, writer }, nav) {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: "http://localhost:8000/board/write",
      data: {
        title,
        content,
        writer,
      },
    });
    if (title === "" || content === "") {
      alert("공백안됨");
      nav("/board/write");
    } else {
      console.log(post);
      nav("/board");
    }
  };
}

export const boardAction = { addPost };
