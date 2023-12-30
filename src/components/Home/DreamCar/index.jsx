import React from "react";
import Link from "next/link";
import Brand from "../Brand";

import Image from "next/image";

function index({ lang, productsCategories }) {
  return (
    <div className="dream-car-area pt-100 pb-100 ">
      <div
        className="d-flex flex-wrap mb-50 wow fadeInUp justify-content-center"
        data-wow-delay="200ms"
      >
        <div className="col-lg-12">
          <div className="section-title-2 text-center">
            {/* <h2>{PartsData?.SectionTitle}</h2> */}
            {/* <p>{PartsData?.SectionsubTitle}</p> */}
          </div>
        </div>
      </div>
      <div className=" d-flex flex-wrap gap-3 justify-content-center ">
        {productsCategories &&
          productsCategories.map((category) => (
            <div
              key={category.id}
              className="col-xl-3 col-md-5 col-10  wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
              data-wow-delay="300ms"
            >
              <Link
                href={`${lang}/singleBrand/?page=1&category=${category.attributes.CategoryTitle}`}
              >
                <div
                  className="img-fluid category-image h-100"
                  style={{
                    backgroundImage: `url(${category?.attributes?.CategoryImage?.data?.attributes?.url})`,
                  }}
                ></div>

                <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
                  <h4 className="text-white">
                    {category.attributes.CategoryTitle}
                  </h4>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default index;
