import React from "react";
import Link from "next/link";

//    <div
//   className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
//   data-wow-delay="500ms"
// >
//   <div className="product-card2 two">
//     <div className="product-img">
//       <img src="assets/img/home2/used-car-08.png" alt="img" />
//     </div>
//     <div className="product-content">
//       <div className="company-logo">
//         <Link legacyBehavior href="#">
//           <a>
//             <img
//               src="assets/img/menu-icon/hyundai-2.svg"
//               alt=""
//             />
//           </a>
//         </Link>
//       </div>
//       <div className="price">
//         <strong>$65,665.00</strong>
//       </div>
//       <h6>
//         <Link legacyBehavior href="/car-deatils">
//           <a>Audi A4-2023</a>
//         </Link>
//       </h6>
//     </div>
//   </div>
// </div>

let kiaTab = [];
for (let index = 1; index <= 8; index++) {
  kiaTab.push(
    <div
      className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
      data-wow-delay="300ms"
    >
      <div className="product-card2 two">
        <div className="product-img">
          <img src="assets/img/demo/part-7.jpeg" alt="img" />
        </div>
        <div className="product-content">
          <div className="company-logo">
            <Link legacyBehavior href="#">
              <a>
                <img src="assets/img/menu-icon/kia-2.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="price">
            <strong>$65,543.00</strong>
          </div>
          <h6>
            <Link legacyBehavior href="/car-deatils">
              <a>Hyundai Sonata-2022</a>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}
let hyundaiTab = [];
for (let index = 1; index <= 8; index++) {
  hyundaiTab.push(
    <div
      className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
      data-wow-delay="300ms"
    >
      <div className="product-card2 two">
        <div className="product-img">
          <img src="assets/img/demo/part-1.webp" alt="img" />
        </div>
        <div className="product-content">
          <div className="company-logo">
            <Link legacyBehavior href="#">
              <a>
                <img src="assets/img/menu-icon/hyundai-2.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="price">
            <strong>$65,543.00</strong>
          </div>
          <h6>
            <Link legacyBehavior href="/car-deatils">
              <a>Toyota Camry-2022</a>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

function index() {
  return (
    <div className="browse-used-car-section mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="section-title-2 text-center">
              <h2>Browse Used Car </h2>
              <p>There has 30+ Brand Category Available </p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="browse-car-filter-area">
              <ul className="nav nav-tabs" id="myTab3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="popular-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#popular"
                    type="button"
                    role="tab"
                    aria-controls="popular"
                    aria-selected="true"
                  >
                    Popular
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="fuel-type-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#fuel-type"
                    type="button"
                    role="tab"
                    aria-controls="fuel-type"
                    aria-selected="false"
                  >
                    KIA
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="transmission-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#transmission"
                    type="button"
                    role="tab"
                    aria-controls="transmission"
                    aria-selected="false"
                  >
                    Hyundai
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content" id="myTab3Content">
              <div
                className="tab-pane fade show active"
                id="popular"
                role="tabpanel"
                aria-labelledby="popular-tab"
              >
                <div className="row justify-content-center g-4">
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-1.webp" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/hyundai-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$32,445.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Mercedes-Benz-2023</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-2.jpg" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/kia-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$65,543.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Hyundai Sonata-2022</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-3.webp" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/hyundai-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$65,543.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Toyota Camry-2022</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-4.webp" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/kia-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$22,765.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Nissan Altima-2023</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-5.webp" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/hyundai-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$44,745.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Porsche 911-2022</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-6.jpg" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/kia-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$23,445.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Mazda CX-5-2023</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-7.jpeg" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/hyundai-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$32,445.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Nissan Altima S-2022</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="product-card2 two">
                      <div className="product-img">
                        <img src="assets/img/demo/part-1.webp" alt="img" />
                      </div>
                      <div className="product-content">
                        <div className="company-logo">
                          <Link legacyBehavior href="#">
                            <a>
                              <img
                                src="assets/img/menu-icon/hyundai-2.svg"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="price">
                          <strong>$65,665.00</strong>
                        </div>
                        <h6>
                          <Link legacyBehavior href="/car-deatils">
                            <a>Audi A4-2023</a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="fuel-type"
                role="tabpanel"
                aria-labelledby="fuel-type-tab"
              >
                <div className="row justify-content-center g-4">
                  {kiaTab.map((item) => item)}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="transmission"
                role="tabpanel"
                aria-labelledby="transmission-tab"
              >
                <div className="row justify-content-center g-4">
                  {hyundaiTab.map((item) => item)}
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
