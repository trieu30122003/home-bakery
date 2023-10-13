import React, { useEffect } from "react";
import Swiper from "../../styles/swiper";
import { useDispatch, useSelector } from "react-redux";
import { setSale } from "../../pages/redux/actions";
export default function Flasale(){
  
  const sale = useSelector((state) => state);
  var swiperchinhsach = new Swiper(".product-flash-swiper", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    spaceBetween: 30,
    // roundLengths: true,
    slideToClickedSlide: false,
    navigation: {
      nextEl: ".product-flash-swiper .swiper-button-next",
      prevEl: ".product-flash-swiper .swiper-button-prev",
    },
    autoplay: false,
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  return(
    <section className="section_flashsale">
          <div className="container">
            <div className="thumb-flasale">
              <h3 className="title-index">
                <a
                  className="title-name"
                  href=""
                  title="Bánh đang giảm giá"
                >
                  {sale.sale && sale.sale[0]?.name}
                </a>
                <img
                  width="202"
                  height="20"
                  src={sale.sale && sale.sale[0]?.image}
                  alt="title"
                />
              </h3>
              <div className="count-down">
                <div
                  className="timer-view"
                  data-countdown="countdown"
                  data-date="2023-10-01-00-00-00"
                >
                  <div className="lof-labelexpired">
                    {sale.sale && sale.sale[0]?.sortDescribe}
                  </div>
                </div>
              </div>

              <div
                className="product-flash-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                style={{ cursor: "grab" }}
              >
                <div
                  className="swiper-wrapper"
                  style={{ transform: "translate3d(0px, 0px, 0px)" }}
                >
                {sale.sale && sale.sale[0].children.map((item) => (
                  <div
                    key={item.id}
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "200px", marginRight: "20px" }}
                  >
                    <form
                      method="post"
                      className="variants product-action"
                    >
                      <div className="product-thumbnail">
                        <a
                          className="image_thumb scale_hover"
                          href=""
                          title="Bánh Sừng Bò Mini"
                        >
                          <img
                            width="234"
                            height="234"
                            src={item.image}
                            alt="Bánh Sừng Bò Mini"

                          />
                        </a>
                        <div className="smart">
                          <span className="sale">- 10% </span>
                        </div>

                        <a
                          href=""
                          className="setWishlist btn-wishlist"
                          title="Thêm vào yêu thích"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                            ></path>
                          </svg>
                        </a>

                        <input
                          className="hidden"
                          type="hidden"
                          name="variantId"
                          value="95784590"
                        />
                        <div className="action">
                          <input
                            type="hidden"
                            name="variantId"
                            value="95784590"
                          />
                          <button
                            className="btn-cart btn-views add_to_cart"
                            title="Thêm vào giỏ"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="#fff"
                                d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                              ></path>
                            </svg>
                          </button>

                          <a
                            title="Xem nhanh"
                            href=""
                            data-handle="banh-sung-bo-mini-1"
                            className="quick-view btn-views"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="#fff"
                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="product-info">
                        <h3 className="product-name">
                          <a
                            className="line-clamp line-clamp-1"
                            href=""
                            title="Bánh Sừng Bò Mini"
                          >{item.name}</a>
                        </h3>
                        <div className="price-box">
                          {item.priceSale} {item.unit}
                          <span className="compare-price">{item.price}{item.unit}</span>
                        </div>
                      </div>
                    </form>
                  </div>
                ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev swiper-button-disabled"></div>
              </div>
            </div>
          </div>
        </section>
  )
};