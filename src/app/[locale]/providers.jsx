"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useState, useEffect, use } from "react";
import { getGlobalSettings } from "../libs/getData";

// import logo from "../../../public/assets/img/LOGO_cutted.png";

export function WhatsAppProvider({ lang, children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [whatsAppData, setWhatsAppData] = useState({});

  useEffect(() => {
    const getWhatsAppData = async () => {
      const data = await getGlobalSettings(lang);
      const whatsApp = data?.attributes?.WHATSAPPSETTINGS;
      setWhatsAppData(whatsApp);
    };
    getWhatsAppData();
  }, [lang]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {!isLoading && (
        <FloatingWhatsApp
          style={!isLoading ? { opacity: 1 } : { opacity: 0 }}
          className="whatsapp-transition"
          phoneNumber={whatsAppData.WhatsappNumber}
          accountName={whatsAppData.Name}
          chatMessage={whatsAppData.InsideMessage}
          placeholder={whatsAppData.ShortMessage}
          avatar={"../../assets/img/demo/LOGO_cutted.png"}
        />
      )}

      {children}
    </>
  );
}
