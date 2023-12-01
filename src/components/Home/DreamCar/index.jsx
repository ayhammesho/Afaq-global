import React from "react";
import Link from "next/link";
import Brand from "../Brand";

import Image from "next/image";

function index({ lang }) {
  return (
    <div className="dream-car-area pt-100 pb-100 ">
      <div
        className="d-flex flex-wrap mb-50 wow fadeInUp justify-content-center"
        data-wow-delay="200ms"
      >
        <div className="col-lg-12">
          <div className="section-title-2 text-center">
            <h2>You will find everything you need here!</h2>
            <p>There has 30+ Brand Category Available </p>
          </div>
        </div>
      </div>
      <div className=" d-flex flex-wrap gap-3 justify-content-center ">
        <div
          className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href={`${lang}/singleBrand`}>
            <div
              className="img-fluid category-image h-100"
              style={{
                backgroundImage: "url(../../assets/img/demo/EngineParts.jpg)",
              }}
            ></div>

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <h4 className="text-white">Engine Parts</h4>
            </div>
          </Link>
        </div>
        <div
          className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href={`${lang}/singleBrand`}>
            <div
              className="img-fluid category-image h-100"
              style={{
                backgroundImage: "url(../../assets/img/demo/tiresParts.jpg)",
              }}
            ></div>

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <h4 className="text-white">Tires Parts</h4>
            </div>
          </Link>
        </div>
        <div
          className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href={`${lang}/singleBrand`}>
            <div
              className="img-fluid category-image h-100"
              style={{
                backgroundImage: "url(../../assets/img/demo/TimingParts.jpg)",
              }}
            ></div>

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <h4 className="text-white">Timing Parts</h4>
            </div>
          </Link>
        </div>
        <div
          className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href={`${lang}/singleBrand`}>
            <div
              className="img-fluid category-image h-100"
              style={{
                backgroundImage: "url(../../assets/img/demo/Brakes.jpg)",
              }}
            ></div>

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <h4 className="text-white">Brakes</h4>
            </div>
          </Link>
        </div>
        <div
          className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href={`${lang}/singleBrand`}>
            <div
              className="img-fluid category-image h-100"
              style={{
                backgroundImage: "url(../../assets/img/demo/PipesParts.jpg)",
              }}
            ></div>

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <h4 className="text-white">Pieps</h4>
            </div>
          </Link>
        </div>
        <div
          className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
          data-wow-delay="300ms"
        >
          <Link href={`${lang}/singleBrand`}>
            <div
              className="img-fluid category-image h-100"
              style={{
                backgroundImage: "url(../../assets/img/demo/Batteries.jpg)",
              }}
            ></div>

            <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
              <h4 className="text-white">Batteries</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
