// 여긴 그냥 슬라이드 등등 있는 메인 페이지
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Main.css";
import { Pagination, Navigation } from "swiper";

const Main = () => {
  return (
    <>
      <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="./img/ex.jpg" alt="img" className="h-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/ex.jpg" alt="img" className="h-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/ex.jpg" alt="img" className="h-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/ex.jpg" alt="img" className="h-screen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/ex.jpg" alt="img" className="h-screen" />
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="h-screen bg-red-200"></div>
        <div className="h-screen bg-red-300"></div>
        <div className="h-screen bg-red-400"></div>
      </div>
    </>
  );
};

export default Main;
