import React from "react";
import Link from "next/link";
import Brand from "../Brand";

function index() {
  return (
    <div className="dream-car-area pt-100 pb-100 ">
      <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
        <div className="col-lg-12">
          <div className="section-title-2 text-center">
            <h2>Search Your Dream Car</h2>
            <p>There has 30+ Brand Category Available </p>
          </div>
        </div>
      </div>
      <div className="row gap-3 justify-content-center ">
        <Brand />
        <Brand />
      </div>
    </div>
  );
}

export default index;
