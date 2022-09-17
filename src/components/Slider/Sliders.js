import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

import s1 from "../../asset/sliders/s5.png";
import s2 from "../../asset/sliders/s4.jpeg";
import s3 from "../../asset/sliders/s6.jpg";

export default function Sliders() {
  return (
    <>
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
          <img src={s1} alt="slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="slider 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
