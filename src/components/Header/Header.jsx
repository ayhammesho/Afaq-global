"use client";

import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardMenu from "./CardMenu";
import LocaleSwitcher from "../common/LocaleSwitcher";
import { usePathname } from "next/navigation";
import tr from "../../../public/assets/img/demo/tr.svg";
import ar from "../../../public/assets/img/demo/ar.svg";
import en from "../../../public/assets/img/demo/en.svg";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

function Header({ lang }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const locales = [
    {
      key: "en",
      icon: en,
    },
    {
      key: "ar",
      icon: ar,
    },
    {
      key: "tr",
      icon: tr,
    },
  ];
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    if (segments[3] !== undefined) {
      return "/" + locale;
    }
    return segments.join("/");
  };
  return (
    <header
      ref={headerRef}
      className={
        state.scrollY > 10
          ? "header-area style-1 sticky"
          : "header-area style-1"
      }
    >
      <div className="header-logo  d-flex">
        <Link legacyBehavior href="/">
          <a>
            <img
              width={250}
              alt="image"
              className="img-fluid"
              src="../assets/img/logo-english.svg"
            />
          </a>
        </Link>
      </div>
      <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
          <div className="mobile-logo-wrap">
            <Link legacyBehavior href="/">
              <a>
                <img
                  width={150}
                  alt="image"
                  src="../assets/img/logo-english.svg"
                />
              </a>
            </Link>
          </div>
        </div>
        <ul className="menu-list">
          <li>
            <Link href={`/${lang}/`}>Home</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>About Us</Link>
          </li>
          <li
            className={`menu-item-has-children ${
              currentRoute === "/" ? "active" : ""
            }`}
          >
            <a
              href="#"
              className={`drop-down ${
                state.activeMenu === "home-one" ? "active" : ""
              }`}
            >
              Products
            </a>
            <i
              onClick={() => toggleMenu("parts")}
              className={`bi bi-${
                state.activeMenu === "parts" ? "dash" : "plus"
              } dropdown-icon`}
            />
            <ul
              className={`sub-menu  large-menu ${
                state.activeMenu === "parts" ? "d-block" : ""
              }`}
            >
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  Japanese brands
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  Korean brands
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  Chinese brands
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  Taiwanese brands
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  European brands
                </Link>
              </li>
              {/* <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  KIA
                  <img src="../assets/img/menu-icon/kia.svg" alt="" />
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center gap-2 justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  Hyundai
                  <img src="../assets/img/menu-icon/hyundai.svg" alt="" />
                </Link>
              </li> */}
            </ul>
          </li>
          <li>
            <Link href={`/${lang}/news`}>News</Link>
          </li>
          <li>
            <Link className="drop-down" href={`/${lang}/contact`}>
              CONTACT US
            </Link>
          </li>
          <li
            className={`menu-item-has-children ${
              currentRoute === "/" ? "active" : ""
            }`}
          >
            <a
              href="#"
              className={`drop-down ${
                state.activeMenu === "home-one" ? "active" : ""
              }`}
            >
              LANG
            </a>
            <i
              onClick={() => toggleMenu("lang")}
              className={`bi bi-${
                state.activeMenu === "lang" ? "dash" : "plus"
              } dropdown-icon`}
            />
            <ul
              className={`sub-menu ${
                state.activeMenu === "lang" ? "d-block" : ""
              }`}
            >
              {locales.map((locale) => (
                <li>
                  <Link
                    className="d-flex flex-wrap align-items-center justify-content-between fw-bold gap-2 fs-24"
                    href={redirectedPathName(locale.key)}
                  >
                    {locale.key}
                    <Image
                      // width={25}
                      src={locale.icon}
                      alt={`${locale.key} flag`}
                    />
                  </Link>
                </li>
              ))}

              {/* <li>
                <Link
                  className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  KIA
                  <img src="../assets/img/menu-icon/kia.svg" alt="" />
                </Link>
              </li>
              <li>
                <Link
                  className="d-flex flex-wrap align-items-center gap-2 justify-content-between fw-bold fs-24"
                  href={`/${lang}/singleBrand`}
                >
                  Hyundai
                  <img src="../assets/img/menu-icon/hyundai.svg" alt="" />
                </Link>
              </li> */}
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav-right d-lg-none  d-flex jsutify-content-end align-items-center">
        {/* Button trigger modal */}

        <div
          className={`sidebar-button mobile-menu-btn ${
            state.isSidebarOpen ? "active" : ""
          }`}
          onClick={toggleSidebar}
        >
          <span />
        </div>
      </div>
    </header>
  );
}

export default Header;
