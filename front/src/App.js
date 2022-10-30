import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Main, Login, Join, Mypage, EditMyInfo, Shop, Board, Write, Cart, ProductDetail, PostDetail, Edit, AddItems, Admin, AdminUser, AdminBoard } from "./page";
import { Nav } from "./components";
function App() {
  // useSelector가 useState의 역할을 한다고 했는데
  // 여기서 loginReducer를 타고 들어가면 isLogin이 있음
  // 그럼 걔의 상태를 바꾸겠다는 뜻임
  // 여기서 state는 combineReducer로 묶인 모든 reducer의 state로 모든 초기값을 호출함
  // 그니까 특정 리듀서의 state만 가져오고 싶으면 뒤에 등록된 리듀서 이름으로 호출해줘야 함

  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const isAdmin = useSelector((state) => state.loginReducer.isAdmin);
  const nickname = useSelector((state) => state.loginReducer.nickname);

  // 상점
  const ShopRedirect = () => {
    return isLogin === true ? <Shop /> : loginMessage();
  };
  const CartRedirect = () => {
    return isLogin === true ? <Cart /> : loginMessage();
  };
  const AddItemsRedirect = () => {
    return isLogin === true ? <AddItems /> : loginMessage();
  };
  const ProductDetailRedirect = () => {
    return isLogin === true ? <ProductDetail /> : loginMessage();
  };

  // 게시판
  const BoardRedirect = () => {
    return isLogin === true ? <Board /> : loginMessage();
  };
  const PostDetailRedirect = () => {
    return isLogin === true ? <PostDetail /> : loginMessage();
  };

  // 관리자
  const AdminRedirect = () => {
    return isAdmin === true ? <Admin /> : blockAdminMessage();
  };
  const AdminUserRedirect = () => {
    return isAdmin === true ? <AdminUser /> : blockAdminMessage();
  };
  const AdminBoardRedirect = () => {
    return isAdmin === true ? <AdminBoard /> : blockAdminMessage();
  };
  const WriteRedirect = () => {
    return isAdmin === true ? <Write /> : blockAdminMessage();
  };
  const EditRedirect = () => {
    return isAdmin === true ? <Edit /> : blockAdminMessage();
  };

  // 마이페이지
  const MypageRedirect = () => {
    return isLogin === true ? <Mypage /> : loginMessage();
  };
  const EditMyInfoRedirect = () => {
    return isLogin === true ? <EditMyInfo /> : loginMessage();
  };

  function loginMessage() {
    alert("로그인 후 이용할 수 있습니다");
    return <Navigate to="/login" />;
  }

  function blockAdminMessage() {
    alert("관리자만 접근 가능합니다");
    return <Navigate to="/" />;
  }
  return (
    <>
      <Nav isLogin={isLogin} isAdmin={isAdmin} />
      <Routes>
        {/* 비로그인 접근 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/* 관리자페이지 */}
        <Route path="/admin" element={<AdminRedirect />} isAdmin={isAdmin} />
        <Route path="/admin/user" element={<AdminUserRedirect />} isAdmin={isAdmin} />
        <Route path="/admin/board" element={<AdminBoardRedirect />} isAdmin={isAdmin} />
        <Route path="/admin/board/write" element={<WriteRedirect />} isAdmin={isAdmin} />
        <Route path="/admin/board/edit/:id" element={<EditRedirect />} isAdmin={isAdmin} />
        {/* 상점 */}
        <Route path="/shop" element={<ShopRedirect />} isLogin={isLogin} />
        <Route path="/shop/cart" element={<CartRedirect />} isLogin={isLogin} />
        <Route path="/shop/add" element={<AddItemsRedirect />} isLogin={isLogin} nickname={nickname} />
        <Route path="/shop/:id" element={<ProductDetailRedirect />} isLogin={isLogin} />
        {/* 마이페이지 */}
        <Route path="/mypage" element={<MypageRedirect />} isLogin={isLogin} />
        <Route path="/mypage/*" element={<EditMyInfoRedirect />} isLogin={isLogin} />
        {/* 게시판 */}
        <Route path="/board" element={<BoardRedirect />} isLogin={isLogin} />
        <Route path="/board/:id" element={<PostDetailRedirect />} isLogin={isLogin} />
      </Routes>
    </>
  );
}

export default App;
