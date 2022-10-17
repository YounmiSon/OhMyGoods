// 메인으로 이동하는 기능만 있다
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to="/">
      <div className="text-xl text-center my-8">◠‿◠</div>
    </Link>
  );
};

export default Header;
