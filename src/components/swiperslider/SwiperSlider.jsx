"use client";
import { useState } from "react";
// Import Swiper React components
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

// Import Swiper Navigation styles
// import 'swiper/css/navigation';


export default function SwiperSlider() {
  return (
    <Swiper
      modules={[Virtual, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1.25}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      virtual
    >
      <SwiperSlide className="w-fit">
        <Image
          src="/images/engine.png"
          width={618}
          height={486}
          className="h-full"
          alt="engine"
        />
      </SwiperSlide>
      <SwiperSlide className="w-fit">
        <Image
          src="/images/engine.png"
          width={618}
          height={486}
          className="h-full"
          alt="engine"
        />
      </SwiperSlide>
      <SwiperSlide className="w-fit">
        <Image
          src="/images/engine.png"
          width={618}
          height={486}
          className="h-full"
          alt="engine"
        />
      </SwiperSlide>

      {/* Navigation arrows */}
      <div className="flex flex-row-reverse justify-start w-full gap-2 mt-3">
      <div className="swiper-button-next cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 61 61"
          fill="none"
        >
          <circle cx="30.5" cy="30.5" r="30.5" fill="#2D2D2D" />
          <path
            d="M25.6843 18.4604L37.7482 29.7704C38.1696 30.1654 38.1696 30.8344 37.7482 31.2294L25.6843 42.5394"
            stroke="#D9D9D9"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="swiper-button-prev rotate-180 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 61 61"
          fill="none"
        >
          <circle cx="30.5" cy="30.5" r="30.5" fill="#2D2D2D" />
          <path
            d="M25.6843 18.4604L37.7482 29.7704C38.1696 30.1654 38.1696 30.8344 37.7482 31.2294L25.6843 42.5394"
            stroke="#D9D9D9"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      </div>
    </Swiper>
  );
}
