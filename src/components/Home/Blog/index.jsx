import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function index({ blogData }) {
  const t = useTranslations("default");
  function formatDate(isoString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(isoString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]}, ${year}`;
  }
  return (
    <div className="news-section pt-90 pb-90">
      <div className="container">
        <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
            <div className="section-title-2">
              <h2>{t("Home.news_title")}</h2>
              {/* <p>{t("Home.news")}</p> */}
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {blogData &&
            blogData.map((blog) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="news-card">
                  <div className="news-img">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        <img
                          src={
                            "http://68.183.74.28:1337" +
                            blog.attributes.BlogImage.data[0].attributes.url
                          }
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h6>
                      <Link legacyBehavior href="/blog-details">
                        <a>{blog.attributes.BlogTitle}</a>
                      </Link>
                    </h6>
                    <div className="news-btm">
                      <div className="author-area">
                        {/* <div className="author-img">
                          <img
                            src=
                            alt=""
                          />
                        </div> */}
                        <div className="author-content">
                          <h6>{blog.attributes.Publisher}</h6>
                          <Link legacyBehavior href="/en/blog-standard">
                            <a>
                              Posted on -{" "}
                              {formatDate(blog.attributes.createdAt)}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default index;
