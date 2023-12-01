import React from "react";

import Banner from "../../components/Home/Banner";
import BannerV2 from "../../components/Home/BannerV2";

import DreamCar from "../../components/Home/DreamCar";
import FeatureCars from "../../components/Home/FeaturedCars/index";
import InerBanner from "../../components/Home/InnerBanner";

import WhyChooseUs from "../../components/Home/WhyDrivco/WhyChooseUs";
import HowItWorks from "../../components/Home/HowDoesItWork";

import OurTrustedPartner from "../../components/Home/OurTrustedPartners";
import Modals from "../../components/Home/Modals";
import Blog from "../../components/Home/Blog";

import Testimonial from "../../components/Home/Testimonial";
import Header from "../../components/Header/Header";
import Footer1 from "../../components/Footer/Footer1";

function HomePage({ params: { locale } }) {
  return (
    <>
      <Modals />
      <Header lang={locale} />
      <BannerV2 />
      <OurTrustedPartner />
      <DreamCar />

      <Blog />
      <Footer1 />
    </>
  );
}

export default HomePage;
