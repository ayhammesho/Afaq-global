import React from "react";
import Marquee from "react-fast-marquee";

function index({ BrandsData }) {
  const brandsImages = BrandsData.images.data?.map(
    (image) => image?.attributes?.url ?? ""
  );
  return (
    <div className="trusted-partner-section mb-100 pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sub-title">
              <h6 style={{ fontSize: "28px" }}>{BrandsData?.Title}</h6>
              <div className="dash" />
            </div>
            <div className="partner-slider">
              <Marquee className="marquee_text2">
                {brandsImages.map((imageUrl) => (
                  <img
                    key={imageUrl}
                    className="me-1"
                    src={imageUrl}
                    width={100}
                    alt=""
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
