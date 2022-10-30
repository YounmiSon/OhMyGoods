import axios from "axios";

function addReview({ title, content, writer }, nav) {
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
}
export const reviewAction = { addReview };
