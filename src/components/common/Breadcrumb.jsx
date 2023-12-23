"use client";

import React from "react";
import { breadcrumbData } from "../../data/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Breadcrumb() {
  const pathname = usePathname().split("/");
  const currentPage = "/" + pathname[2];
  const t = useTranslations("default");

  const currentPathData = breadcrumbData.find(
    (item) => item.path === currentPage
  );
  const lastPathSegment = currentPathData?.path.split("/").pop();

  return (
    <div className="inner-page-banner">
      <div className="banner-wrapper">
        <div className="container-fluid">
          <ul className="breadcrumb-list">
            <li>
              <Link legacyBehavior href="/">
                <a>{t("Header.home")}</a>
              </Link>
            </li>
            <li style={{ textTransform: "capitalize" }}>
              {t(currentPathData?.path_title)}
            </li>
          </ul>
          <div className="banner-main-content-wrap">
            <div className="row">
              <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                <div className="banner-content">
                  <span className="sub-title">
                    {t(currentPathData?.sub_title) || "Our Brief History"}
                  </span>
                  <h1>{t(currentPathData?.title) || "Our Brief History"}</h1>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 d-lg-flex d-none align-items-center justify-content-end">
                <div className="banner-img">
                  <img
                    src={
                      currentPathData?.img_src ||
                      "../assets/img/inner-page/inner-banner-img.png"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
