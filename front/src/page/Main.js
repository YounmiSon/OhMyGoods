// 여긴 그냥 슬라이드 등등 있는 메인 페이지
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Main.css";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();
  const moveToShop = () => {
    nav("/shop");
  };
  return (
    <>
      <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="./img/slide/logo_keroro.png" alt="logo1" className="absolute top-80 left-28 w-[600PX]" />
          <img src="./img/slide/keroro.jpg" alt="slide1" />
          <button onClick={moveToShop} className="absolute bottom-72 left-28 bg-slate-100 w-52 rounded-lg text-xl font-bold p-4 shadow-xl border-gray-200 hover:bg-purple-500 hover:text-white ">
            굿즈 보러가기
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slide/logo_oran.png" alt="logo2" className="absolute top-80 left-28 w-[600PX]" />
          <img src="./img/slide/oran.jpg" alt="slide2" />
          <button onClick={moveToShop} className="absolute bottom-72 left-28 bg-slate-100 w-52 rounded-lg text-xl font-bold p-4 shadow-xl border-gray-200 hover:bg-purple-500 hover:text-white ">
            굿즈 보러가기
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slide/logo_mob.png" alt="logo3" className="absolute top-80 left-28 w-[600PX]" />
          <img src="./img/slide/mob_psycho.jpg" alt="slide3" />
          <button onClick={moveToShop} className="absolute bottom-72 left-28 bg-slate-100 w-52 rounded-lg text-xl font-bold p-4 shadow-xl border-gray-200 hover:bg-purple-500 hover:text-white ">
            굿즈 보러가기
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slide/logo_spyfamily.png" alt="logo4" className="absolute top-80 left-28 w-[600PX]" />
          <img src="./img/slide/spyfamily.jpg" alt="slide4" />
          <button onClick={moveToShop} className="absolute bottom-72 left-28 bg-slate-100 w-52 rounded-lg text-xl font-bold p-4 shadow-xl border-gray-200 hover:bg-purple-500 hover:text-white ">
            굿즈 보러가기
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Main;
