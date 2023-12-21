"use client";
import TimeAgo from "react-timeago";
import { useTranslations } from "next-intl";

import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function Index({ testimonials }) {
  const t = useTranslations("default");
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-6",
        prevEl: ".prev-6",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  });

  return (
    <div className="home2-testimonial-section mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>{t("Home.testimonials")}</h2>
              {/* <p>Here are some of the featured cars in different categories</p> */}
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <Swiper {...settings} className="swiper customer-feedback-slider2">
              <div className="swiper-wrapper">
                {testimonials &&
                  testimonials.map((testimonial) => (
                    <SwiperSlide className="swiper-slide" key={testimonial.id}>
                      <div className="feedback-card">
                        <p>{testimonial.attributes.CustomerReview}</p>
                        <div className="author-name">
                          <h6>{testimonial.attributes.CustomerName}</h6>

                          <TimeAgo
                            date={testimonial.attributes.createdAt}
                            // formatter={formatter(5, "minute", "ago")}
                            minPeriod={60}
                          />
                        </div>
                        {testimonial.attributes.CustomerJobTitle && (
                          <div className="author-name">
                            <h6>{testimonial.attributes.CustomerJobTitle}</h6>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
