import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Main, Login, Join, Shop, Mypage, EditMyInfo } from "./page";
import Header from "./components/Header";
import Nav from "./components/Nav";
function App() {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  return (
    <>
      <Header />
      <Nav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/*" element={<EditMyInfo />} />
      </Routes>
    </>
  );
}

export default App;
