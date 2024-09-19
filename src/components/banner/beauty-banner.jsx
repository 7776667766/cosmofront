import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
// internal
import slider_bg_1 from "@assets/img/slider/3/slider-1.jpg";
import slider_bg_2 from "@assets/img/slider/3/slider-2.jpg";
import slider_bg_3 from "@assets/img/slider/3/slider-3.jpg";
import { ArrowNext, ArrowPrev, Cosmetics, Meckoup, VeganProduct } from "@/svg";

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".tp-slider-3-button-next",
    prevEl: ".tp-slider-3-button-prev",
  },
  pagination: {
    el: ".tp-slider-3-dot",
    clickable: true,
  },
};

// slider data
const slider_data = [
  {
    id: 1,
    bg: slider_bg_1,
   
  },
  // {
  //   id: 2,
  //   bg: slider_bg_2,
  // },
  // {
  //   id: 3,
  //   bg: slider_bg_3,
  // },
];

// feature item 
function FeatureItem({ icon, title }) {
  return (
    <div className="tp-slider-feature-item-3 d-flex mb-30">
      <div className="tp-slider-feature-icon-3">
        <span>
          {icon}
        </span>
      </div>
      <div className="tp-slider-feature-content-3">
        <h3 className="tp-slider-feature-title-3">
          {title}
        </h3>
      </div>
    </div>
  )
}

const BeautyBanner = () => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
      
          {slider_data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="tp-slider-item-3 tp-slider-height-3 p-relative d-flex align-items-center"
            >
              <div
                className="tp-slider-thumb-3 include-bg     " 
                style={{ backgroundImage: `url(${item.bg.src})` }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                      <div className="tp-slider-btn-3">
                        <Link
                          href="/shop"
                          className="tp-btn tp-btn-border tp-btn-border-white"
                        >
                          Shop Now
                        </Link>
                   </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </section>
    </>
  );
};

export default BeautyBanner;
