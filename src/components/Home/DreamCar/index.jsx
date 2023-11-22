import React from "react";
import Link from "next/link";
import Brand from "../Brand";

import Image from "next/image";

function index() {
  return (
    <div className="dream-car-area pt-100 pb-100 ">
      <div
        className="d-flex flex-wrap mb-50 wow fadeInUp justify-content-center"
        data-wow-delay="200ms"
      >
        <div className="col-lg-12">
          <div className="section-title-2 text-center">
            <h2>Search Your Dream Car</h2>
            <p>There has 30+ Brand Category Available </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3 justify-content-center ">
        <div
          className="col-xl-5  col-10 wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href="#">
            <Image
              className="img-fluid category-image h-100"
              src="/assets/img/home2/hyundai-brand.jpg"
              width="1400"
              height="1200"
              alt=""
            />

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <img width={60} src="assets/img/menu-icon/hyundai.svg" alt="" />
            </div>
          </Link>
        </div>
        <div
          className="col-xl-5 col-10 wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href="#">
            <Image
              className="img-fluid category-image h-100"
              src="/assets/img/home2/kia-brand.jpg"
              width="1400"
              height="1200"
              alt=""
            />

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <img width={60} src="assets/img/menu-icon/kia.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
