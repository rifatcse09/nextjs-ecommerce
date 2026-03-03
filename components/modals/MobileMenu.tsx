"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "../common/OdometerComponent";
import { useUiElement } from "@/context/Context";
import {
  categoryMegamenus,
  categorySimpleLinks,
  demoData,
  navBrandList,
  shopPages,
  innerPageMenuColumns,
  elementsMenuColumns,
  uxMenuColumns,
  supportMenuItems,
} from "@/data/menu";
import type { MenuItem } from "@/types";

const BADGE_CLASS: Record<string, string> = {
  green: "rbt-product-badge-bg-green",
  primary: "rbt-product-badge-bg-primary",
  danger: "rbt-product-badge-bg-danger",
  yellow: "rbt-product-badge-bg-yellow",
  red: "rbt-product-badge-bg-red",
  success: "rbt-product-badge-bg-success",
  secondary: "rbt-product-badge-bg-secondary",
};

function getBadgeClass(color?: string) {
  return color && BADGE_CLASS[color]
    ? BADGE_CLASS[color]
    : "rbt-product-badge-bg-primary";
}

function MenuItemLink({ item }: { item: MenuItem }) {
  const badge = item.badge ? (
    <div
      className={`rbt-product-badge ${getBadgeClass(item.badgeColor)} border-rounded ml--8`}
    >
      {item.badge}
    </div>
  ) : null;
  const content = (
    <>
      {item.label}
      {badge}
    </>
  );
  if (item.useLink) return <Link href={item.href}>{content}</Link>;
  if (item.href.startsWith("http") || item.href === "#!" || item.href === "#") {
    return (
      <a href={item.href === "#!" || item.href === "#" ? "#!" : item.href}>
        {content}
      </a>
    );
  }
  return <Link href={item.href}>{content}</Link>;
}

export default function MobileMenu() {
  const { toggleMobileMenu, mobileMenuOpen } = useUiElement();
  const [openMenuIds, setOpenMenuIds] = useState<Set<string>>(new Set());

  const closeMenu = () => {
    setOpenMenuIds(new Set());
    toggleMobileMenu();
  };

  const toggleMenu = (id: string) => {
    setOpenMenuIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleBackdropClick = () => {
    if (mobileMenuOpen) closeMenu();
  };

  return (
    <div
      className={`popup-mobile-menu ${mobileMenuOpen ? "active" : ""}`}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="inner-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-top">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    alt="Unimart Logo Images"
                    src="/assets/images/logo/logo.webp"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <p className="description">
              Unimart is a E-commerce Template. Worldwide electronics store
              since 1978.
            </p>
            <div className="rbt-inner-search-field style-one rbt-search-field-rounded rbt-search-field-sm-width">
              <input type="text" placeholder="Search for products" />
              <button
                className="rbt-round-btn search-btn rbt-text-color-gray-500"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="rbt-tab rbt-round-shape-tab">
            <ul
              className="nav nav-tabs mb--0"
              id="mobile-menuTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="rbt-tab-mobilemenu-1"
                  data-bs-toggle="tab"
                  data-bs-target="#rbt-tab-pane-mobilemenu-1"
                  type="button"
                  role="tab"
                  aria-controls="rbt-tab-pane-mobilemenu-1"
                  aria-selected="true"
                >
                  <i className="fa-solid fa-bars-sort" />
                  Menu
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="rbt-tab-mobilemenu-2"
                  data-bs-toggle="tab"
                  data-bs-target="#rbt-tab-pane-mobilemenu-2"
                  type="button"
                  role="tab"
                  aria-controls="rbt-tab-pane-mobilemenu-2"
                  aria-selected="false"
                >
                  <i className="fa-sharp fa-regular fa-layer-group" />
                  Catagories
                </button>
              </li>
            </ul>
            <div className="tab-content" id="mobile-menuTabContent">
              <div
                className="tab-pane fade show active"
                id="rbt-tab-pane-mobilemenu-1"
                role="tabpanel"
                aria-labelledby="rbt-tab-mobilemenu-1"
                tabIndex={0}
              >
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-rbt-megamenu has-menu-child-item position-static">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-home");
                        }}
                        className={openMenuIds.has("menu-home") ? "open" : ""}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-home")}
                      >
                        Home <i className="fa-regular fa-chevron-down" />
                      </a>
                      {/* Start Mega Menu  */}
                      <div
                        className={`rbt-megamenu rbt-presentation-megamenu rbt-width-fullscreen ${openMenuIds.has("menu-home") ? "active" : ""}`}
                      >
                        <div className="rbt-megamenu-wrapper">
                          <div className="container p_sm--0 p_md--0 p_lg--0">
                            <div className="row row--12 home-plesentation-wrapper single-dropdown-menu-presentation mt_dec--24">
                              {demoData.map((item, index) => (
                                <div
                                  key={item.href}
                                  className={`col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                                >
                                  <div
                                    className={`demo-single rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                                  >
                                    <div className="inner">
                                      <div className="thumbnail">
                                        <Link href={item.href}>
                                          <Image
                                            alt="Demo Images"
                                            src={item.src}
                                            width={item.width}
                                            height={item.height}
                                          />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        <h4 className="rbt-title">
                                          <Link href={item.href}>
                                            {item.title}
                                          </Link>
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="load-demo-btn text-center pt--24 pt_sm--0 pt_lg--0 position-relative">
                              <Link
                                href={`/#rbt-demo-presentation-section`}
                                className="rbt-btn-grp rbt-has-separator-shape justify-content-center rbt-scroll-trigger fade_in animation-order-2"
                              >
                                <span className="rbt-btn rbt-btn-single rbt-btn rbt-marquee-btn marquee-auto rbt-btn-md has-primary-overlay has-no-hover-transform">
                                  <span data-text="View All The Trending Collection">
                                    VIEW ALL DEMOS (80+) New drops every month
                                    🔥
                                  </span>
                                </span>
                                <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm default-primary-bg p--0">
                                  <span className="animated-icon">
                                    <svg
                                      className="icon_external"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 15.5 15.5"
                                    >
                                      <g className="icon-wrapper">
                                        <path
                                          className="icon-rectangle"
                                          d="m7.75,0c.41,0,.75.34.75.75s-.34.75-.75.75H3.08c-.87,0-1.58.71-1.58,1.58v9.33c0,.87.71,1.58,1.58,1.58h9.33c.87,0,1.58-.71,1.58-1.58v-4.67c0-.41.34-.75.75-.75s.75.34.75.75v4.67c0,1.7-1.38,3.08-3.08,3.08H3.08c-1.7,0-3.08-1.38-3.08-3.08V3.08C0,1.38,1.38,0,3.08,0h4.67Z"
                                          strokeWidth={0}
                                        />
                                        <path
                                          className="icon-arrow-el-one"
                                          d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z"
                                          strokeWidth={0}
                                          style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transformOrigin: "0px 0px 0px",
                                          }}
                                          data-svg-origin="15.5 0"
                                          transform="matrix(1,0,0,1,0,0)"
                                        />
                                        <path
                                          className="icon-arrow-line-one"
                                          d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z"
                                          strokeWidth={0}
                                          style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transformOrigin: "0px 0px 0px",
                                          }}
                                          data-svg-origin="15.4975004196167 0.002499997615814209"
                                          transform="matrix(1,0,0,1,0,0)"
                                        />
                                        <path
                                          className="icon-arrow-el-two"
                                          d="m15.5,0v4.29c0,.41-.34.75-.75.75s-.75-.34-.75-.75V1.5h-2.75c-.38,0-.69-.28-.74-.65v-.1c0-.41.33-.75.74-.75h4.25Z"
                                          strokeWidth={0}
                                          style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transformOrigin: "0px 0px 0px",
                                          }}
                                          data-svg-origin="15.5 0"
                                          transform="matrix(1,0,0,1,0,0)"
                                        />
                                        <path
                                          className="icon-arrow-line-two"
                                          d="m14.22.22c.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06L5.95,10.61c-.29.29-.77.29-1.06,0-.29-.29-.29-.77,0-1.06.4-.4.76-.76,1.09-1.09l.47-.47c.37-.37.7-.7,1-1l.34-.34.46-.46.41-.41c.74-.74,1.29-1.29,2.09-2.09l.61-.61c.17-.17.34-.34.53-.53.13-.13.25-.25.36-.36l.59-.59c.08-.08.16-.16.23-.23l.36-.36c.1-.1.19-.19.26-.26l.42-.42s.07-.07.11-.11Z"
                                          strokeWidth={0}
                                          style={{
                                            translate: "none",
                                            rotate: "none",
                                            scale: "none",
                                            transformOrigin: "0px 0px 0px",
                                          }}
                                          data-svg-origin="15.4975004196167 0.002499997615814209"
                                          transform="matrix(1,0,0,1,0,0)"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </span>
                              </Link>
                              <span className="rbt-overlay-counter counter-md rbt-scroll-trigger fade_in animation-order-4">
                                <OdometerComponent max={100} />
                                <span className="counter-suffix">+</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Mega Menu  */}
                    </li>
                    <li className="with-rbt-megamenu has-menu-child-item">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-shop");
                        }}
                        className={openMenuIds.has("menu-shop") ? "open" : ""}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-shop")}
                      >
                        Shop <i className="fa-regular fa-chevron-down" />
                      </a>
                      {/* Start Mega Menu  */}
                      <div
                        className={`rbt-megamenu grid-item-3 pl_sm--0 pl_md--0 pl_lg--0 ${openMenuIds.has("menu-shop") ? "active" : ""}`}
                      >
                        <div className="rbt-megamenu-wrapper">
                          <div className="row d-none d-xl-flex">
                            <div className="col-lg-12">
                              <div className="mega-top-banner bg-two">
                                <div className="rbt-banner-inner justify-content-start">
                                  <div className="rbt-banner-content">
                                    <h5 className="title">
                                      Buy One and Get 50% Off the Second
                                      Purchase Now
                                    </h5>
                                    <p className="b3 desc">
                                      Send us your idea, it may appear on
                                      Unimart.
                                    </p>
                                  </div>
                                  <div className="pricing-action d-flex flex-column align-items-center rbt-gap--8">
                                    <div className="rbt-pricing-part d-flex">
                                      <span className="rbt-price-text offer-price">
                                        $189.00
                                      </span>
                                      <del className="rbt-dis-price-text">
                                        $295.00
                                      </del>
                                    </div>
                                    <Link
                                      className="rbt-btn rbt-btn-sm rbt-btn-black"
                                      href={`/product-single-default/755`}
                                    >
                                      View Details
                                    </Link>
                                  </div>
                                  <a
                                    href="#"
                                    className="product-img position-bottom"
                                  >
                                    <Image
                                      alt="Ecommerce Product"
                                      src="/assets/images/splash/menu-banner/menu-prd-01.webp"
                                      width={278}
                                      height={280}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row row--16">
                            {shopPages.map((section, sectionIdx) => (
                              <div
                                key={`shop-${section.title}-${sectionIdx}`}
                                className="col-lg-12 col-xl-6 col-xxl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                              >
                                <h6 className="rbt-short-title">
                                  {section.title}
                                </h6>
                                <ul className="mega-menu-item">
                                  {section.items.map((item) => (
                                    <li key={`${item.href}-${item.label}`}>
                                      <MenuItemLink item={item} />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* End Mega Menu  */}
                    </li>
                    <li className="with-rbt-megamenu has-menu-child-item position-static">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-pages");
                        }}
                        className={openMenuIds.has("menu-pages") ? "open" : ""}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-pages")}
                      >
                        Pages <i className="fa-regular fa-chevron-down" />
                      </a>
                      {/* Start Mega Menu  */}
                      <div
                        className={`rbt-megamenu rbt-width-fullscreen mega-has-bg-img mega-bg-one p-0 ${openMenuIds.has("menu-pages") ? "active" : ""}`}
                      >
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu-wrapper bg-transparent">
                          <div className="wrapper">
                            <div className="row row--12 mt_dec--12">
                              <div className="col-xl-9">
                                <div className="h-100 d-flex flex-column justify-content-between">
                                  <div className="row">
                                    {innerPageMenuColumns.map(
                                      (section, sectionIdx) => (
                                        <div
                                          key={`pages-${section.title}-${sectionIdx}`}
                                          className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16"
                                        >
                                          <h6 className="rbt-short-title">
                                            {section.title}
                                          </h6>
                                          <ul className="mega-menu-item">
                                            {section.items.map((item) => (
                                              <li
                                                key={`${item.href}-${item.label}`}
                                              >
                                                <MenuItemLink item={item} />
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                  <div className="row">
                                    <div className="col-12">
                                      <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                    </div>
                                    <div className="col-lg-12">
                                      <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                        {navBrandList.map((brand, index) => (
                                          <li key={`nav-brand-pages-${index}`}>
                                            <Link href="/shop-by-brands">
                                              <Image
                                                alt="Ecommerce Brand Image"
                                                src={brand.src}
                                                width={brand.width}
                                                height={brand.height}
                                                className="image-auto"
                                              />
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </div>
                      {/* End Mega Menu  */}
                    </li>
                    <li className="with-rbt-megamenu has-menu-child-item position-static">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-elements");
                        }}
                        className={
                          openMenuIds.has("menu-elements") ? "open" : ""
                        }
                        role="button"
                        aria-expanded={openMenuIds.has("menu-elements")}
                      >
                        Elements <i className="fa-regular fa-chevron-down" />
                      </a>
                      {/* Start Mega Menu  */}
                      <div
                        className={`rbt-megamenu container pl_sm--0 pl_md--0 pl_lg--0 ${openMenuIds.has("menu-elements") ? "active" : ""}`}
                      >
                        <div className="rbt-megamenu-wrapper">
                          <div className="row row--12 d-flex justify-content-between">
                            <div className="col-xl-9">
                              <div className="h-100 d-flex flex-column justify-content-between">
                                <div className="row row--12">
                                  {elementsMenuColumns.map(
                                    (section, sectionIdx) => (
                                      <div
                                        key={`elements-${section.title}-${sectionIdx}`}
                                        className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                                      >
                                        <h6 className="rbt-short-title">
                                          {section.title}
                                        </h6>
                                        <ul className="mega-menu-item">
                                          {section.items.map((item) => (
                                            <li
                                              key={`${item.href}-${item.label}`}
                                            >
                                              <MenuItemLink item={item} />
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ),
                                  )}
                                </div>
                                <div className="row row--12 d-none d-xl-flex">
                                  <div className="col-12">
                                    <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                                  </div>
                                  <div className="col-lg-12">
                                    <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                                      {navBrandList.map((brand, index) => (
                                        <li key={`nav-brand-elements-${index}`}>
                                          <Link href="/shop-by-brands">
                                            <Image
                                              alt="Ecommerce Brand Image"
                                              src={brand.src}
                                              width={brand.width}
                                              height={brand.height}
                                            />
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                              <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                                <div className="mega-top-banner">
                                  <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                    <div className="rbt-banner-content">
                                      <h5 className="title rbt-text-color-white">
                                        New Aurora Watch
                                      </h5>
                                      <p className="b3 desc rbt-text-color-gray-200">
                                        Send your idea, appear Unimart.
                                      </p>
                                    </div>
                                    <a className="rbt-btn rbt-btn-sm" href="#">
                                      View Details
                                    </a>
                                    <a
                                      href="#"
                                      className="product-img position-bottom mt--24"
                                    >
                                      <Image
                                        alt="Ecommerce Product"
                                        src="/assets/images/splash/menu-banner/menu-prd-03-lg.webp"
                                        width={520}
                                        height={408}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Mega Menu  */}
                    </li>
                    <li className="with-rbt-megamenu has-menu-child-item position-static">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-core-features");
                        }}
                        className={
                          openMenuIds.has("menu-core-features") ? "open" : ""
                        }
                        role="button"
                        aria-expanded={openMenuIds.has("menu-core-features")}
                      >
                        Core Features{" "}
                        <i className="fa-regular fa-chevron-down" />
                      </a>
                      {/* Start Mega Menu  */}
                      <div
                        className={`rbt-megamenu p-0 container ${openMenuIds.has("menu-core-features") ? "active" : ""}`}
                      >
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu-wrapper p--0">
                          <div className="wrapper">
                            <div className="row row--0 mt_dec--32">
                              <div className="col-xl-8 mt--24 rbt-scroll-trigger zoom_in animation-order-2">
                                <div className="rbt-inner-menu-wrapper p--24 p_sm--0 p_md--0 p_lg--0">
                                  <div className="row row-12 mt_dec--16">
                                    {uxMenuColumns.map(
                                      (section, sectionIdx) => (
                                        <div
                                          key={`ux-${section.title}-${sectionIdx}`}
                                          className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16"
                                        >
                                          <h6 className="rbt-short-title">
                                            {section.title}
                                          </h6>
                                          <ul className="mega-menu-item">
                                            {section.items.map((item) => (
                                              <li
                                                key={`${item.href}-${item.label}`}
                                              >
                                                <MenuItemLink item={item} />
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4 mt--24 single-mega-item rbt-scroll-trigger zoom_in animation-order-2">
                                <Image
                                  className="h-100"
                                  alt="Ecommerce Banner"
                                  src="/assets/images/header-bg/megamenu-banner-hr-01.webp"
                                  width={976}
                                  height={990}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </div>
                      {/* End Mega Menu  */}
                    </li>
                    <li className="has-dropdown position-relative">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-more");
                        }}
                        className={openMenuIds.has("menu-more") ? "open" : ""}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-more")}
                      >
                        More <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul
                        className={`submenu ${openMenuIds.has("menu-more") ? "active" : ""}`}
                      >
                        {supportMenuItems.map((item) => (
                          <li key={item.href + item.label}>
                            <MenuItemLink item={item} />
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className="tab-pane fade"
                id="rbt-tab-pane-mobilemenu-2"
                role="tabpanel"
                aria-labelledby="rbt-tab-mobilemenu-2"
                tabIndex={0}
              >
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu">
                    {categoryMegamenus.map((cat, catIndex) => {
                      const catMenuId = `cat-${catIndex}`;
                      return (
                        <li
                          key={cat.label}
                          className="with-rbt-megamenu has-menu-child-item position-static"
                        >
                          <a
                            href="#!"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleMenu(catMenuId);
                            }}
                            className={openMenuIds.has(catMenuId) ? "open" : ""}
                            role="button"
                            aria-expanded={openMenuIds.has(catMenuId)}
                          >
                            <span>
                              <i
                                className={`rbt-catagories-icon mr--8 ${cat.icon}`}
                              />
                            </span>
                            {cat.label}
                            <span className="rbt-chevron-right">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </a>
                          {/* Start Mega Menu  */}
                          <div
                            className={`rbt-megamenu grid-item-5 pl_sm--0 pl_md--0 pl_lg--0 ${openMenuIds.has(catMenuId) ? "active" : ""}`}
                          >
                            <div className="container p_sm--0 p_md--0 p_lg--0">
                              <div className="rbt-megamenu-wrapper">
                                <div className="row row--12">
                                  {cat.sections.map((section, sectionIdx) => (
                                    <div
                                      key={`${cat.label}-${section.title}-${sectionIdx}`}
                                      className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                                    >
                                      <h6 className="rbt-short-title">
                                        {section.title}
                                      </h6>
                                      <ul className="mega-menu-item">
                                        {section.items.map((item) => (
                                          <li
                                            key={`${item.href}-${item.label}`}
                                          >
                                            <MenuItemLink item={item} />
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div
                                      className={`rbt-menu-offer-card ${cat.banner.bannerCardClass ?? ""}`}
                                    >
                                      <div
                                        className={`mega-top-banner ${cat.banner.bannerInnerClass ?? ""}`}
                                      >
                                        <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                          <div className="rbt-banner-content">
                                            <h5 className="title">
                                              {cat.banner.title}
                                            </h5>
                                            <p className="b3 desc">
                                              {cat.banner.desc}
                                            </p>
                                          </div>
                                          {cat.banner.btnHref.startsWith(
                                            "http",
                                          ) || cat.banner.btnHref === "#" ? (
                                            <a
                                              className="rbt-btn rbt-btn-sm rbt-btn-black"
                                              href={cat.banner.btnHref}
                                            >
                                              {cat.banner.btnText}
                                            </a>
                                          ) : (
                                            <Link
                                              className="rbt-btn rbt-btn-sm rbt-btn-black"
                                              href={cat.banner.btnHref}
                                            >
                                              {cat.banner.btnText}
                                            </Link>
                                          )}
                                          <a
                                            href="#"
                                            className="product-img position-bottom mt--24"
                                          >
                                            <Image
                                              alt="Ecommerce Product"
                                              src={cat.banner.imgSrc}
                                              width={cat.banner.imgWidth}
                                              height={cat.banner.imgHeight}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Mega Menu  */}
                        </li>
                      );
                    })}
                    {categorySimpleLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <span>
                            <i
                              className={`rbt-catagories-icon mr--8 ${link.icon}`}
                            />
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href={`/categories-list`}>
                        {" "}
                        View All Categories{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-bottom">
          <div className="social-share-wrapper">
            <span className="rbt-short-title d-block">Find With Us</span>
            <ul className="rbt-social-icon-list mt--12">
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-telegram" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-top-left rbt-information-list justify-content-center">
            <li>
              <a href="mailto:hello@example.com">
                <i className="fa-light fa-envelope" />
                example@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+302555-0107">
                <i className="fa-regular fa-phone" />
                (302) 555-0107
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
