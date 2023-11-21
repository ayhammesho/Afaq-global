"use client";

import Header from "../../../components/Header/Header";
import Footer1 from "../../../components/Footer/Footer1";

import Breadcrumb from "../../../components/common/Breadcrumb";

import Modals from "../../../components/Home/Modals";

export default function PagesLayout({ children, params: { locale } }) {
  return (
    <>
      <Modals />
      <Header lang={locale} />
      <Breadcrumb />
      {children}
      <Footer1 />
    </>
  );
}
