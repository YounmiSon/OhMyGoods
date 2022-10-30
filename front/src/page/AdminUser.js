import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/actions/loginAction";

const AdminUser = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 유저 정보 가져오기
  const users = useSelector((state) => state.loginReducer.users);
  useEffect(() => {
    dispatch(loginAction.getUser());
  }, []);

  const deleteUser = (userId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(loginAction.deleteUser(userId));
      alert("삭제완료");
    } else {
      alert("취소됨");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">
        <h1 className="text-3xl my-4">유저 관리</h1>
        <div className="flex justify-center items-center">
          <table className="w-[900px]">
            <thead>
              <tr className="grid-rows-4 text-center bg-white h-12 border-[1px] border-b-black">
                <td>이메일</td>
                <td>닉네임</td>
                <td>가입일</td>
                <td className="w-36">관리</td>
              </tr>
            </thead>
            <tbody>
              {/* {users} */}
              {users.map(({ email, nickname, createdAt, userId }, idx) => (
                <tr key={idx} className="text-center h-12 border-[1px] border-b-black">
                  <td>{email}</td>
                  <td>{nickname}</td>
                  <td>{createdAt}</td>
                  <td
                    onClick={(e) => {
                      deleteUser(userId);
                    }}
                    className="cursor-pointer font-extrabold"
                  >
                    삭제
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUser;
