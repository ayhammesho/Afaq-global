"use client";

import React from "react";
import "node_modules/react-modal-video/css/modal-video.css";

function index() {
  return (
    <div className="how-it-work-section mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>How Does It Work</h2>
              <p>Here are some of the featured cars in different categories</p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="work-process-group">
              <div className="row justify-content-center g-lg-0 gy-5">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-work-process text-center">
                    <div className="step">
                      <span>01</span>
                    </div>
                    <div className="icon">
                      <img src="assets/img/home2/icon/loaction.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Choose Any where</h6>
                      <p>
                        Car servicing is the regular maintenance and inspection
                        of a vehicle to ensure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-work-process text-center">
                    <div className="step">
                      <span>02</span>
                    </div>
                    <div className="icon">
                      <img src="assets/img/home2/icon/contact.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Contact With Us</h6>
                      <p>
                        Car servicing is the regular maintenance and inspection
                        of a vehicle to ensure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-work-process text-center">
                    <div className="step">
                      <span>03</span>
                    </div>
                    <div className="icon">
                      <img src="assets/img/home2/icon/pay.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Pay For The Car</h6>
                      <p>
                        Car servicing is the regular maintenance and inspection
                        of a vehicle to ensure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single-work-process text-center">
                    <div className="step">
                      <span>04</span>
                    </div>
                    <div className="icon">
                      <img src="assets/img/home2/icon/recieve.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>Recieve The Car</h6>
                      <p>
                        Car servicing is the regular maintenance and inspection
                        of a vehicle to ensure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
