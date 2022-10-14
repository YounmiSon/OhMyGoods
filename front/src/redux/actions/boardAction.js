import axios from "axios";

function addPost(title, content, writer, nav) {
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
    console.log(post);
  };
}
export const boardAction = { addPost };
