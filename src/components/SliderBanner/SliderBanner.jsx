"use client";

import Link from "next/link";
import style from "./SliderBanner.module.scss";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderBanner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="bannerSlider"
      >
        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div class={`holder ${style.holder}`}>
              <div class={style.textWrap}>
                <h1 class={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div class={`holder ${style.holder}`}>
              <div class={style.textWrap}>
                <h1 class={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div class={`holder ${style.holder}`}>
              <div class={style.textWrap}>
                <h1 class={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div class={`holder ${style.holder}`}>
              <div class={style.textWrap}>
                <h1 class={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div class={`holder ${style.holder}`}>
              <div class={style.textWrap}>
                <h1 class={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className={style.swiperController}>
          <div
            className={`${style.swiper_pagination}  ${style.swiper__pagination}`}
          ></div>
        </div>
      </Swiper>

      <div className={style.customPagination}>
        <div className={style.customPagi}>
          <div className={style.customPagi__item} data-slide="0">
            Insurance
          </div>
          <div className={style.customPagi__item} data-slide="1">
            Long-Term Savings
          </div>
          <div className={style.customPagi__item} data-slide="2">
            Regulation
          </div>
        </div>
      </div>
    </>
  );
}

// el: ".swiper__pagination", // Use a valid DOM element here
//           type: "bullets",
//           clickable: true,
//           bulletClass: "bg-amber-400",
//           bulletActiveClass: "bg-green-400",
