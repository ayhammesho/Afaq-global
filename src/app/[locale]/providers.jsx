"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
// import logo from "../../../public/assets/img/LOGO_cutted.png";

export function WhatsAppProvider({ children }) {
  return (
    <>
      <FloatingWhatsApp
        accountName="AFAQ Auto Parts"
        avatar={"../../assets/img/demo/LOGO_cutted.png"}
      />
      {children}
    </>
  );
}
