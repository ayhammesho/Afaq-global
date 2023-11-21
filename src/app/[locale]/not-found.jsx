import React from "react";

import Link from "next/link";

function NotFound() {
  return (
    <>
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-wrapper">
                <div className="error-content-area text-center">
                  <h1>Opps, Page Not Found</h1>
                  <p>
                    Something went wrong, web page that is displayed to the user
                    when the server cannot find the requested page.
                  </p>
                  <div className="error-img mb-50">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-page/404.svg"
                      alt=""
                    />
                  </div>
                  <div className="error-btn">
                    <Link legacyBehavior href="/">
                      <a className="primary-btn3">Back To Home</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
