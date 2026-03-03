"use client";
import Link from "next/link";

import Image from "next/image";
import OdometerComponent from "../common/OdometerComponent";
import {
  demoData,
  elementsMenuColumns,
  innerPageMenuColumns,
  supportMenuItems,
  uxMenuColumns,
} from "@/data/menu";
import { useMenuHover } from "@/hooks/useMenuHover";

import NavShopPages from "./headerComponents/NavShopPages";
export default function Nav() {
  const menuHover = useMenuHover();
  return (
    <>
      {" "}
      <li
        className="with-rbt-megamenu has-menu-child-item position-static rbt-initial-odo-count"
        {...menuHover}
      >
        <a href="#!">
          Demos <i className="fa-regular fa-chevron-down" />
        </a>
        {/* Start Mega Menu  */}
        <div className="rbt-megamenu rbt-presentation-megamenu rbt-width-fullscreen">
          <div className="rbt-megamenu-wrapper">
            <div className="container p_sm--0 p_md--0 p_lg--0">
              <div className="row row--12 home-plesentation-wrapper single-dropdown-menu-presentation mt_dec--24">
                {demoData.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-1-5 col-md-12 col-sm-12 col-12 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                  >
                    <div
                      className={`demo-single rbt-scroll-trigger zoom_in animation-order-${
                        index + 1
                      }`}
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
                            <Link href={item.href}>{item.title}</Link>
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
                      VIEW ALL DEMOS (80+) New drops every month 🔥
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
                          ></path>
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
                          ></path>
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
                          ></path>
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
                          ></path>
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
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </Link>
                <span className="rbt-overlay-counter counter-md rbt-scroll-trigger fade_in animation-order-4">
                  <OdometerComponent max={100} />{" "}
                  <span className="counter-suffix">+</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End Mega Menu  */}
      </li>
      <NavShopPages />
      <li
        className="with-rbt-megamenu has-menu-child-item position-static"
        {...menuHover}
      >
        <a href="#!">
          Pages <i className="fa-regular fa-chevron-down" />
        </a>
        {/* Start Mega Menu  */}
        <div className="rbt-megamenu rbt-width-fullscreen mega-has-bg-img mega-bg-one p-0 ">
          {/* Start Mega Menu  */}
          <div className="rbt-megamenu-wrapper bg-transparent">
            <div className="wrapper">
              <div className="row row--12 mt_dec--12">
                <div className="col-xl-9">
                  <div className="h-100 d-flex flex-column justify-content-between">
                    <div className="row">
                      {innerPageMenuColumns.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16"
                        >
                          <h6 className="rbt-short-title">{column.title}</h6>
                          <ul className="mega-menu-item">
                            {column.items.map((item, itemIndex) => {
                              const Wrapper = item.href.startsWith("/")
                                ? Link
                                : "a";
                              const props = item.href.startsWith("/")
                                ? { href: item.href }
                                : { href: item.href };

                              return (
                                <li key={itemIndex}>
                                  <Wrapper {...props}>
                                    {item.label}
                                    {item.badge && (
                                      <div
                                        className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                                      >
                                        {item.badge}
                                      </div>
                                    )}
                                  </Wrapper>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                      </div>
                      <div className="col-lg-12">
                        <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-01.webp"
                                width={90}
                                height={30}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-02.webp"
                                width={137}
                                height={26}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-03.webp"
                                width={91}
                                height={16}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-04.webp"
                                width={91}
                                height={18}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-05.webp"
                                width={106}
                                height={26}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-06.webp"
                                width={119}
                                height={14}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-07.webp"
                                width={105}
                                height={16}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-01.webp"
                                width={90}
                                height={30}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-02.webp"
                                width={137}
                                height={26}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop-by-brands`}>
                              <Image
                                alt="Ecommerce Brand Image"
                                src="/assets/images/brands/brand-a-03.webp"
                                width={91}
                                height={16}
                              />
                            </Link>
                          </li>
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
      <li
        className="with-rbt-megamenu has-menu-child-item position-static"
        {...menuHover}
      >
        <a href="#!">
          Elements <i className="fa-regular fa-chevron-down" />
        </a>
        {/* Start Mega Menu  */}
        <div className="rbt-megamenu container pl_sm--0 pl_md--0 pl_lg--0">
          <div className="rbt-megamenu-wrapper">
            <div className="row row--12 d-flex justify-content-between">
              <div className="col-xl-9">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div className="row row--12">
                    {elementsMenuColumns.map((column, colIndex) => (
                      <div
                        key={colIndex}
                        className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                      >
                        <h6 className="rbt-short-title">{column.title}</h6>
                        <ul className="mega-menu-item">
                          {column.items.map((item, itemIndex) => {
                            const Wrapper = item.href.startsWith("/")
                              ? Link
                              : "a";
                            const props = item.href.startsWith("/")
                              ? { href: item.href }
                              : { href: item.href };

                            return (
                              <li key={itemIndex}>
                                <Wrapper {...props}>
                                  {item.label}
                                  {item.badge && (
                                    <div
                                      className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                                    >
                                      {item.badge}
                                    </div>
                                  )}
                                </Wrapper>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="row row--12 d-none d-xl-flex">
                    <div className="col-12">
                      <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                    </div>
                    <div className="col-lg-12">
                      <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                        <li>
                          <Link href={`/shop-by-brands`}>
                            <Image
                              alt="Ecommerce Brand Image"
                              src="/assets/images/brands/brand-a-01.webp"
                              width={90}
                              height={30}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop-by-brands`}>
                            <Image
                              alt="Ecommerce Brand Image"
                              src="/assets/images/brands/brand-a-02.webp"
                              width={137}
                              height={26}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop-by-brands`}>
                            <Image
                              alt="Ecommerce Brand Image"
                              src="/assets/images/brands/brand-a-03.webp"
                              width={91}
                              height={16}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop-by-brands`}>
                            <Image
                              alt="Ecommerce Brand Image"
                              src="/assets/images/brands/brand-a-04.webp"
                              width={91}
                              height={18}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop-by-brands`}>
                            <Image
                              alt="Ecommerce Brand Image"
                              src="/assets/images/brands/brand-a-05.webp"
                              width={106}
                              height={26}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop-by-brands`}>
                            <Image
                              alt="Ecommerce Brand Image"
                              src="/assets/images/brands/brand-a-06.webp"
                              width={119}
                              height={14}
                            />
                          </Link>
                        </li>
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
      <li
        className="with-rbt-megamenu has-menu-child-item position-static"
        {...menuHover}
      >
        <a href="#!">
          Core Features <i className="fa-regular fa-chevron-down" />
        </a>
        {/* Start Mega Menu  */}
        <div className="rbt-megamenu p-0 container">
          {/* Start Mega Menu  */}
          <div className="rbt-megamenu-wrapper p--0">
            <div className="wrapper">
              <div className="row row--0 mt_dec--32">
                <div className="col-xl-8 mt--24 rbt-scroll-trigger zoom_in animation-order-2">
                  <div className="rbt-inner-menu-wrapper p--24 p_sm--0 p_md--0 p_lg--0">
                    <div className="row row-12 mt_dec--16">
                      {uxMenuColumns.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16"
                        >
                          <h6 className="rbt-short-title">{column.title}</h6>
                          <ul className="mega-menu-item">
                            {column.items.map((item, itemIndex) => {
                              const Wrapper = item.href.startsWith("/")
                                ? Link
                                : "a";
                              const props = item.href.startsWith("/")
                                ? { href: item.href }
                                : { href: item.href };

                              return (
                                <li key={itemIndex}>
                                  <Wrapper {...props}>
                                    {item.label}
                                    {item.badge && (
                                      <div
                                        className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                                      >
                                        {item.badge}
                                      </div>
                                    )}
                                  </Wrapper>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
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
      <li className="has-dropdown position-relative" {...menuHover}>
        <a href="#!">
          More <i className="fa-regular fa-chevron-down" />
        </a>
        <ul className="submenu">
          {supportMenuItems.map((item, index) => {
            const isInternal = item.href.startsWith("/") || item.useLink;
            const Wrapper = isInternal ? Link : "a";
            const props = isInternal
              ? { href: item.href }
              : {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                };

            return (
              <li key={index}>
                <Wrapper {...props}>
                  {item.label}
                  {item.badge && (
                    <div
                      className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                    >
                      {item.badge}
                    </div>
                  )}
                </Wrapper>
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}
