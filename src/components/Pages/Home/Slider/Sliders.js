import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import Images_1 from '../../../../asset/sliders/s1.jpg'
import Images_2 from '../../../../asset/sliders/s2.jpg'
import Images_3 from '../../../../asset/sliders/s3.jpg'

export default function Sliders() {
  return (
    <div className="w-52 mx-auto">
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
          <img src={Images_1} alt="slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images_2} alt="slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Images_3} alt="slider 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
