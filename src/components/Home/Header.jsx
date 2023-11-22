"use client";

import Link from "next/link";
import SelectComponent from "../../utils/SelectComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useReducer, useRef } from "react";

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
  const condition = ["Vheicle Condition", "Used", "Brand New", "Recondition"];
  const brand = ["Toyota", "Audi", "Hyundai", "Nissan", "Jeep"];
  const model = ["Isetta", "Smart Fortwo", "Jaguar XJS", "Spyker C8"];
  const budget = ["10000-15000", "15000-20000", "20000-25000", "25000-300"];

  return (
    <>
      <div className="header-and-filter-area ">
        <header
          ref={headerRef}
          className={`${
            state.scrollY > 10 ? "sticky" : "fixed"
          } header-area style-3 `}
        >
          {/* filter-area */}
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/img/logo-english-white.svg"
                  width={250}
                />
              </a>
            </Link>
          </div>
          <div
            className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}
          >
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      width={200}
                      alt="image"
                      src="assets/img/logo-english.svg"
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
                  Parts
                </a>
                <i
                  onClick={() => toggleMenu("parts")}
                  className={`bi bi-${
                    state.activeMenu === "parts" ? "dash" : "plus"
                  } dropdown-icon`}
                />
                <ul
                  className={`sub-menu ${
                    state.activeMenu === "parts" ? "d-block" : ""
                  }`}
                >
                  <li>
                    <Link
                      className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
                      href={`/${lang}/singleBrand`}
                    >
                      KIA
                      <img src="assets/img/menu-icon/kia.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="d-flex flex-wrap align-items-center gap-2 justify-content-between fw-bold fs-24"
                      href={`/${lang}/singleBrand`}
                    >
                      Hyundai
                      <img src="assets/img/menu-icon/hyundai.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link className="drop-down" href={`/${lang}/contact`}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            {/* Button trigger modal */}

            <div className="hotline-area d-xl-flex d-none">
              <div className="icon">
                <img src="assets/img/home1/icon/hotline-icon.svg" alt="" />
              </div>
              <div className="content">
                <span>To More Inquiry</span>
                <h6>
                  <a href="tel:+990737621432">+990-737 621 432</a>
                </h6>
              </div>
            </div>
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
      </div>
    </>
  );
}

export default Header;
