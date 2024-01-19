"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <section className="mt-2">
      <div className="main-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          speed={500}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full w-full"
        >
          <SwiperSlide>
            <img
              src="/slider-image-1.png"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/slider-image-2.png"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
