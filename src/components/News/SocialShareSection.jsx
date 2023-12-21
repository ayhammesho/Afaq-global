import React from "react";
import { useTranslations } from "next-intl";

const SocialShareSection = () => {
  const t = useTranslations("default");
  return (
    <div className="blog-tag-social-area">
      {/* <div className="bolg-tag">
                <h6>Tag:</h6>
                <ul>
                  <li>
                    <Link legacyBehavior href="blog-standard">
                      <a>Brand Car,</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-standard">
                      <a>Driving,</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-standard">
                      <a>Car Service,</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-standard">
                      <a>Car Advice</a>
                    </Link>
                  </li>
                </ul>
              </div> */}
      <div className="social-area">
        <h6>{t("News.share")}</h6>
        <ul className="social-link d-flex align-items-center">
          <li>
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <i className="bx bxl-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="bx bxl-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShareSection;
