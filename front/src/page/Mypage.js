const Mypage = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12 w-screen">
        <div className="mx-10">
          <img
            className="w-96 my-8 rounded-full"
            src="/img/default_profile.png"
            alt="profile"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-10">username의 마이페이지</h1>
          <span className="text-2xl">닉네임 : user1</span>
          <span className="text-2xl">보유포인트: 1000p</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <input type="submit" value="수정하기" className="cursor-pointer" />
      </div>
    </>
  );
};

export default Mypage;
