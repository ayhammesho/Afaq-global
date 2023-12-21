import RecentsNews from "@/components/News/RecentsNews";
import SingleNewsCard from "@/components/News/SingleNewsCard";
import Pagination from "@/components/News/Pagination";
import { getBlogPageData } from "@/app/libs/getData";
import { notFound } from "next/navigation";

async function NewsPage({ params: { locale }, searchParams }) {
  const blogsResponse = await getBlogPageData(
    locale,
    searchParams.page || 1,
    5
  );
  const recentBlogsResponse = await getBlogPageData(locale, 1, 3);
  const blogsData = blogsResponse?.data;
  const recentBlogs = recentBlogsResponse?.data;
  const blogsPagination = blogsResponse?.meta?.pagination;
  if (searchParams.page > blogsPagination.pageCount || searchParams.page < 1) {
    notFound();
  }

  return (
    <div className="blog-standard-page pt-100 mb-100">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-8">
            {blogsData &&
              blogsData?.map((blog) => (
                <SingleNewsCard
                  id={blog.id}
                  blogTitle={blog.attributes.BlogTitle}
                  publisher={blog.attributes.Publisher}
                  blogImage={
                    blog.attributes.BlogImage?.data
                      ? blog.attributes.BlogImage?.data[0].attributes.url
                      : ""
                  }
                  createdAt={blog.attributes.createdAt}
                />
              ))}
            {blogsPagination && <Pagination paginationData={blogsPagination} />}
          </div>
          <div className="col-lg-4">
            <div className="blog-sidebar mb-50">
              {/* <NewsCategories /> */}
              {recentBlogs && <RecentsNews recentBlogs={recentBlogs} />}
              {/* <div className="single-widgets widget_egns_tag">
                <div className="widget-title mb-20">
                  <h6>Popular Tags</h6>
                </div>
                <p className="wp-block-tag-cloud">
                  <Link legacyBehavior href={`news/blog-standard`}>
                    <a>Car Advice</a>
                  </Link>
                  <Link legacyBehavior href={`news/blog-standard`}>
                    <a>Rental</a>
                  </Link>
                  <Link legacyBehavior href={`news/blog-standard`}>
                    <a>Hyundai</a>
                  </Link>
                  <Link legacyBehavior href={`news/blog-standard`}>
                    <a>Driving</a>
                  </Link>
                  <Link legacyBehavior href={`news/blog-standard`}>
                    <a>Compare</a>
                  </Link>
                  <Link legacyBehavior href={`news/blog-standard`}>
                    <a>Buying</a>
                  </Link>
                  <Link legacyBehavior href="/car-deatils">
                    <a>Toyota</a>
                  </Link>
                  <a href="#">Audi</a>
                  <a href="#">Service</a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
