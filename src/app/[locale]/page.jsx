import React from "react";

import Banner from "../../components/Home/Banner";

import DreamCar from "../../components/Home/DreamCar";
import FeatureCars from "../../components/Home/FeaturedCars/index";
import InerBanner from "../../components/Home/InnerBanner";

import BroseUsedCar from "../../components/Home/BrowseUsedCar";
import HowItWorks from "../../components/Home/HowDoesItWork";

import OurTrustedPartner from "../../components/Home/OurTrustedPartners";
import Modals from "../../components/Home/Modals";

import Testimonial from "../../components/Home/Testimonial";
import Header from "../../components/Home/Header";
import Footer1 from "../../components/Footer/Footer1";

function HomePage({ params: { locale } }) {
  return (
    <>
      <Modals />
      <Header lang={locale} />
      <Banner />
      <OurTrustedPartner />
      <DreamCar />
      <FeatureCars />
      <InerBanner />;
      <BroseUsedCar />;
      <HowItWorks />
      <Testimonial />
      <Footer1 />
    </>
  );
}

export default HomePage;
