"use client";

import { Inter } from "next/font/google";

import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
//
import "../../../public/assets/css/bootstrap-icons.css";
import "../../../public/assets/css/boxicons.min.css";
import "../../../public/assets/css/fontawesome.min.css";
import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/swiper-bundle.min.css";
import "../../../public/assets/css/nice-select.css";
import "../../../styles/custom.css";
import "../../../public/assets/css/style.css";

// import "../../../styles/globals.css";

// import "../../../public/assets/css/style-rtl.css";
// import "../../../public/assets/css/bootstrap.rtl.min.css";

//
import { useEffect, useState } from "react";
import Script from "next/script";
import Preloader from "../../components/common/Preloader";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// Can be imported from a shared config
const locales = ["ar", "tr", "en"];

export default function LocaleLayout({ children, params: { locale } }) {
  const [loading, setLoading] = useState(true);

  const handlePreloaderClose = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (locale === "ar") {
    }
    // Simulate loading for 3 seconds (adjust as needed)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [locale]);
  useEffect(() => {
    import("../../../public/assets/js/bootstrap.min.js");
  }, []);
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
