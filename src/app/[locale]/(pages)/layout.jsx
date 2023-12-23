import Header from "../../../components/Header/Header";
import Footer1 from "../../../components/Footer/Footer1";

import Breadcrumb from "../../../components/common/Breadcrumb";

import Modals from "../../../components/Home/Modals";
import { getGlobalSettings, getCategoryOfProducts } from "@/app/libs/getData";

export default async function PagesLayout({ children, params: { locale } }) {
  const globalSettings = await getGlobalSettings(locale);
  const productsCategories = await getCategoryOfProducts(locale);

  const HeaderLogo =
    globalSettings?.attributes?.HeaderLogo?.data?.attributes?.url;
  const footerLogo =
    globalSettings?.attributes?.FooterLogo?.data?.attributes?.url;
  const SocialLinks = globalSettings?.attributes?.SocialLinks;
  const FooterSlogan = globalSettings?.attributes?.FooterSlogan;
  const MapLink = globalSettings?.attributes?.MapLink;

  return (
    <>
      {/* <Modals /> */}
      <Header
        lang={locale}
        HeaderLogo={HeaderLogo}
        categories={productsCategories}
      />
      <Breadcrumb />
      {children}
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
