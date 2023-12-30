import WhyChooseUs from "@/components/Home/WhyDrivco/WhyChooseUs";
import WelcomeBanner from "@/components/About Us/WelcomeBanner";
import Gallery from "@/components/About Us/Gallery";
import HowItWorks from "@/components/About Us/HowItWorks";
import CustomerSlider from "@/components/About Us/CustomerSlider";
import Testimonial from "@/components/Home/Testimonial/index";
import { getAboutPageData, getTestimonials } from "@/app/libs/getData";

export async function generateMetadata({ params: { locale } }) {
  const aboutPageData = await getAboutPageData(locale);
  const seo = aboutPageData?.attributes?.seo;

  return {
    title: `${seo?.metaTitle}| AFAQ Global`,
    description: seo?.metaDescription || "",
    keywords: seo?.keywords || "",
    openGraph: {
      images: seo?.metaImage?.data?.attributes?.url,
    },
  };
}

async function About({ params: { locale } }) {
  const aboutPageData = await getAboutPageData(locale);
  const testimonials = await getTestimonials(locale);

  const WelcomeSectionData = aboutPageData?.attributes?.WelcomeSection;
  const WhyUsData = aboutPageData?.attributes?.WHYAFAQSection;
  const galleryData = aboutPageData?.attributes?.Gallery?.Images?.data;
  const howDoesWorkData = aboutPageData?.attributes?.HowDoesWorkSection;

  return (
    <>
      {WelcomeSectionData && (
        <WelcomeBanner WelcomeSectionData={WelcomeSectionData} />
      )}

      {WhyUsData && <WhyChooseUs WhyUsData={WhyUsData} />}

      {galleryData && <Gallery galleryData={galleryData} />}

      <HowItWorks howDoesWorkData={howDoesWorkData} />
      {/* <CustomerSlider /> */}
      <Testimonial testimonials={testimonials} />
    </>
  );
}

export default About;
