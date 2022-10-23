import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Main, Login, Join, Mypage, EditMyInfo, Shop, Board, Write, Cart, Detail, Edit, AddItems, Admin } from "./page";
import { Nav } from "./components";
function App() {
  // useSelector가 useState의 역할을 한다고 했는데
  // 여기서 loginReducer를 타고 들어가면 isLogin이 있음
  // 그럼 걔의 상태를 바꾸겠다는 뜻임
  // 여기서 state는 combineReducer로 묶인 모든 reducer의 state로 모든 초기값을 호출함
  // 그니까 특정 리듀서의 state만 가져오고 싶으면 뒤에 등록된 리듀서 이름으로 호출해줘야 함
  const isLogin = useSelector((state) => state.loginReducer.isLogin);

  const LoginRedirect = () => {
    return isLogin === true ? <Shop /> : loginMessage();
  };

  function loginMessage() {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Nav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/shop" element={<LoginRedirect />} isLogin={isLogin} />
        <Route path="/shop/cart" element={<Cart />} isLogin={isLogin} />
        <Route path="/shop/add" element={<AddItems />} isLogin={isLogin} />
        <Route path="/mypage" element={<Mypage />} isLogin={isLogin} />
        <Route path="/mypage/*" element={<EditMyInfo />} isLogin={isLogin} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/write" element={<Write />} isLogin={isLogin} />
        <Route path="/board/:id" element={<Detail />} isLogin={isLogin} />
        <Route path="/board/edit" element={<Edit />} isLogin={isLogin} />
      </Routes>
    </>
  );
}

export default App;
