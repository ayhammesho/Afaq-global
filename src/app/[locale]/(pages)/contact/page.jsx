import ContactForm from "@/components/Contact us/ContactForm";
import ContactInformation from "@/components/Contact us/ContactInformation";
import ContactMap from "@/components/Contact us/ContactMap";
import { getGlobalSettings } from "@/app/libs/getData";

async function ContactPage({ params: { locale } }) {
  const globalSettings = await getGlobalSettings(locale);

  const companyEmail = globalSettings?.attributes?.email;

  const companyPhone = globalSettings?.attributes?.Phone_Number;

  const companyLocation = globalSettings?.attributes?.location_text;
  const companyMap = globalSettings?.attributes?.MapLink;

  return (
    <>
      <div className="contact-page pt-100 mb-100">
        <div className="container">
          <div className="row g-4 mb-100">
            <div className="col-lg-5">
              <ContactInformation
                companyEmail={companyEmail}
                companyPhone={companyPhone}
                companyLocation={companyLocation}
              />
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <ContactMap companyMap={companyMap} />
    </>
  );
}

export default ContactPage;
