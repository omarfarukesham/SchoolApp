import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";
import Images_1 from "../../../../asset/sliders/img1.jpg";
import Images_2 from "../../../../asset/sliders/img2.jpg";
import Images_3 from "../../../../asset/sliders/img3.jpg";
import Images_4 from "../../../../asset/sliders/img4.png";

export default function Sliders() {
  return (
    <div className="w-3/5 mx-auto">
      <Swiper
        effect={"coverflow"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="block">
            <img src={Images_1} alt="slider 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images_2} alt="slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images_3} alt="slider 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images_4} alt="slider 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
