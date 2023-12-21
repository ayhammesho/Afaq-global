import RecentsNews from "@/components/News/RecentsNews";
import SingleNewNavigation from "@/components/News/SingleNewNavigation";
import SocialShareSection from "@/components/News/SocialShareSection";
import NewContent from "@/components/News/NewContent";

import { getSingleBlog } from "@/app/libs/getData";

async function NewDetailsPage({ params: { locale, id } }) {
  const blogsData = await getSingleBlog(locale, id);

  const blogTitle = blogsData?.attributes?.BlogTitle;
  const blogsContent = blogsData?.attributes?.BlogContent;
  const blogPublisher = blogsData?.attributes?.Publisher;
  const blogImage = blogsData.attributes.BlogImage?.data
    ? blogsData.attributes.BlogImage?.data[0].attributes.url
    : "";
  const postedAt = blogsData?.attributes?.createdAt;

  return (
    <div className="blog-details-page pt-100 mb-100">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-12">
            <NewContent
              blogTitle={blogTitle}
              blogsContent={blogsContent}
              blogPublisher={blogPublisher}
              blogImage={blogImage}
              postedAt={postedAt}
            />

            <SocialShareSection />
            <div className="row mb-100">
              {/* <div className="col-lg-12">
                <SingleNewNavigation />
              </div> */}
            </div>
            {/* <CommentsSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDetailsPage;
