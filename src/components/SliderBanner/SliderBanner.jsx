"use client";

import Link from "next/link";
import style from "./SliderBanner.module.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function SliderBanner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        classNameName="bannerSlider"
      >
        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div className={`holder ${style.holder}`}>
              <div className={style.textWrap}>
                <h1 className={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div className={`holder ${style.holder}`}>
              <div className={style.textWrap}>
                <h1 className={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div className={`holder ${style.holder}`}>
              <div className={style.textWrap}>
                <h1 className={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div className={`holder ${style.holder}`}>
              <div className={style.textWrap}>
                <h1 className={style.sectionTitle}>Policy & Guidance</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={style.backgroundContent}
            style={{ backgroundImage: `url(/images/Image2.jpg)` }}
          >
            <div className={`holder ${style.holder}`}>
              <div className={style.textWrap}>
                <h1 className={style.sectionTitle}>Policy & Guidance</h1>
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
//           bulletclassName: "bg-amber-400",
//           bulletActiveclassName: "bg-green-400",
