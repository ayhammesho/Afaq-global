"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function ProductDetailsPage() {
  const productSlide2 = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  });
  const productSlide1 = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  });
  return (
    <div className="product-details-page pt-100 mb-100">
      <div className="container">
        <div className="row g-lg-4 gy-5 mb-90">
          <div className="col-lg-6">
            <div
              className="tab-content tab-content1 mb-30"
              id="v-pills-tabContent"
            >
              <div
                className="tab-pane fade active show"
                id="v-pills-img1"
                role="tabpanel"
                aria-labelledby="v-pills-img1-tab"
              >
                <img
                  className="img-fluid"
                  src="../../assets/img/demo/shop-big-01.png"
                  alt=""
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-img2"
                role="tabpanel"
                aria-labelledby="v-pills-img2-tab"
              >
                <img
                  className="img-fluid"
                  src="../../assets/img/demo/shop-big-01.png"
                  alt=""
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-img3"
                role="tabpanel"
                aria-labelledby="v-pills-img3-tab"
              >
                <img
                  className="img-fluid"
                  src="../../assets/img/demo/shop-big-01.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="nav nav1 nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-img1-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-img1"
                type="button"
                role="tab"
                aria-controls="v-pills-img1"
                aria-selected="true"
              >
                <img src="../../assets/img/demo/shop-sm-01.png" alt="" />
              </button>
              <button
                className="nav-link"
                id="v-pills-img2-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-img2"
                type="button"
                role="tab"
                aria-controls="v-pills-img2"
                aria-selected="false"
              >
                <img src="../../assets/img/demo/shop-sm-01.png" alt="" />
              </button>
              <button
                className="nav-link"
                id="v-pills-img3-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-img3"
                type="button"
                role="tab"
                aria-controls="v-pills-img3"
                aria-selected="false"
              >
                <img src="../../assets/img/demo/shop-sm-01.png" alt="" />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details-content">
              <h4>
                Steering system (steering wheel, steering column, power steering
                pump)
              </h4>
              <p>
                This is not an exhaustive list, but it covers many of the major
                components found in a typical car.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-90">
          <div className="col-lg-12">
            <div
              className="nav nav2 nav  nav-pills"
              id="v-pills-tab2"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="false"
              >
                Product Details
              </button>
            </div>
            <div className="tab-content tab-content2" id="v-pills-tabContent2">
              <div
                className="tab-pane fade active show"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="description">
                  <p>
                    The steering system in a vehicle is responsible for allowing
                    the driver to control the direction of the vehicle's
                    movement. It consists of several components, including the
                    steering wheel, steering column, and power steering pump.
                    It's worth noting that there are different types of steering
                    systems used in vehicles, including rack-and-pinion and
                    recirculating ball steering systems. While the basic
                    principles remain the same, the specific design and
                    components may vary between different vehicle models and
                    manufacturers.
                  </p>
                  <ul>
                    <li>
                      <strong>Steering Wheel:</strong> The steering wheel is the
                      part of the steering system that the driver directly
                      interacts with. It is typically a circular device that the
                      driver uses to turn the front wheels of the vehicle. The
                      steering wheel is connected to the steering column.
                    </li>
                    <li>
                      <strong>Steering Column:</strong> The steering column is a
                      shaft-like structure that connects the steering wheel to
                      the steering gear or rack. It serves as a pathway for
                      transferring the driver's input from the steering wheel to
                      the steering gear.
                    </li>
                    <li>
                      <strong>Power Steering Pump:</strong> In modern vehicles,
                      many steering systems are equipped with power steering,
                      which assists the driver in turning the wheels with less
                      effort. The power steering pump is a hydraulic pump
                    </li>
                  </ul>
                  <p>
                    When the driver turns the steering wheel, the movement is
                    transmitted through the steering column to the steering gear
                    or rack. The steering gear or rack converts the rotational
                    motion of the steering wheel into linear motion, which
                    ultimately controls the movement of the vehicle's front
                    wheels. If power steering is present, the power steering
                    pump helps apply hydraulic pressure to assist in turning the
                    wheels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-90">
          <div className="col-lg-12">
            <div className="section-title">
              <h4>Related Products</h4>
            </div>
          </div>
          <div className="col-lg-12 mb-40">
            <Swiper
              {...productSlide1}
              className="swiper product-details-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-01.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Steering Rack Advance Auto Parts is a retailer.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-02.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Jekit 355*32mm assembled brake disks.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-03.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-05.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Tech master New Brand Carbon ceramic brakes. </a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-06.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>WJB WA512187 - Rear Wheel Hub Bearing Assembly.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-02.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Jekit 355*32mm assembled brake disks.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-03.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Pump Water Audi Seat Skoda Vw Skf Vkpc 81620.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-05.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>Tech master New Brand Carbon ceramic brakes. </a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <dSwiperSlideiv className="swiper-slide">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="../../assets/img/demo/Product-06.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href="#">
                          <a>WJB WA512187 - Rear Wheel Hub Bearing Assembly.</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </dSwiperSlideiv>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-12 divider">
            <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
              <div className="slider-btn prev-2 d-md-flex d-none">
                <svg
                  width={11}
                  height={19}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="view-btn-area">
                <p>There are More Car Parts Available</p>
                <Link legacyBehavior href="/shop">
                  <a className="view-btn">View More</a>
                </Link>
              </div>
              <div className="slider-btn next-2 d-md-flex d-none">
                <svg
                  width={11}
                  height={19}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
