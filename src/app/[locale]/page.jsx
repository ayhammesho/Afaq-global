import React from "react";
import BannerV2 from "../../components/Home/BannerV2";
import DreamCar from "../../components/Home/DreamCar";
import OurTrustedPartner from "../../components/Home/OurTrustedPartners";
import Modals from "../../components/Home/Modals";
import Blog from "../../components/Home/Blog";
import Header from "../../components/Header/Header";
import Footer1 from "../../components/Footer/Footer1";
import {
  getGlobalSettings,
  getHomePageData,
  getBlogPageData,
  getCategoryOfProducts,
} from "@/app/libs/getData";

export async function generateMetadata({ params: { locale } }) {
  const homePageDataPromise = await getHomePageData(locale);
  const seo = homePageDataPromise?.attributes?.seo[0];

  return {
    title: `${seo?.metaTitle}| AFAQ Global`,
    description: seo?.metaDescription || "",
    keywords: seo?.keywords || "",
    openGraph: {
      images: seo?.metaImage?.data?.attributes?.url,
    },
  };
}

async function HomePage({ params: { locale } }) {
  const globalSettingsPromise = getGlobalSettings(locale);
  const homePageDataPromise = getHomePageData(locale);
  const homeBlogDataPromise = getBlogPageData(locale, 1, 3);
  const productsCategoriesPromise = getCategoryOfProducts(locale);

  const [globalSettings, homePageData, blogPageData, productsCategories] =
    await Promise.all([
      globalSettingsPromise,
      homePageDataPromise,
      homeBlogDataPromise,
      productsCategoriesPromise,
    ]);

  const headerLogo =
    globalSettings?.attributes?.HeaderLogo?.data?.attributes?.url;
  const footerLogo =
    globalSettings?.attributes?.FooterLogo?.data?.attributes?.url;
  const SocialLinks = globalSettings?.attributes?.SocialLinks;
  const FooterSlogan = globalSettings?.attributes?.FooterSlogan;
  const MapLink = globalSettings?.attributes?.MapLink;

  const heroData = homePageData?.attributes?.HeroSection;
  const BrandsData = homePageData?.attributes?.BrandsSection;
  const PartsData = homePageData?.attributes?.PartsSection;
  const blogData = blogPageData?.data;

  return (
    <>
      <Modals />
      <Header
        lang={locale}
        HeaderLogo={headerLogo}
        categories={productsCategories}
      />
      {heroData && <BannerV2 heroData={heroData} lang={locale} />}
      {BrandsData && <OurTrustedPartner BrandsData={BrandsData} />}
      <DreamCar lang={locale} productsCategories={productsCategories} />
      <Blog blogData={blogData} lang={locale} />
      <Footer1
        lang={locale}
        categories={productsCategories}
        footerLogo={footerLogo}
        SocialLinks={SocialLinks}
        FooterSlogan={FooterSlogan}
        MapLink={MapLink}
      />
    </>
  );
}

export default HomePage;
