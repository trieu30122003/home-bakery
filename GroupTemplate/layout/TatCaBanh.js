import React from "react";
import { useSelector } from "react-redux";

export default function TatCaBanh() {
  const allBakery = useSelector((state) => state);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/menu');
  //       const allBakery = await res.json();
  //       dispatch(setAllBakery(allBakery));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log("allBakery", allBakery.allBakery && allBakery.allBakery[0].children[0]?.chil);
  return (
    <section className="section_product_tab">
      <div className="container">
        <h3 className="title-index">
          <a
            className="title-name"
            href=""
            title="Tất cả bánh"
          >{allBakery.allBakery && allBakery.allBakery[0]?.name}
          </a>
          <img
            width="202"
            height="20"
            src={allBakery.allBakery && allBakery.allBakery[0]?.image}
            data-src="//bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263"
            alt="title"
          />
        </h3>
        <div
          className="e-tabs not-dqtab ajax-tab-1"
          data-section="ajax-tab-1"
          data-view="grid_4"
        >
          <div className="row">
            <div className="col-lg-3">
              <ul className="tabs tabs-title tab-desktop ajax clearfix">
                <li
                  className="tab-link has-content current"
                >
                  <span title={allBakery.allBakery && allBakery.allBakery[0].children[0].title}> {allBakery.allBakery && allBakery.allBakery[0].children[0].name} </span>
                </li>
                {allBakery.allBakery && allBakery.allBakery[0].children.slice(1).map((item) => (
                  <li
                    key={item.id}
                    className="tab-link has-content"
                  >
                    <span title={item.title}> {item.name} </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-1 tab-content current">
                <div className="row row-fix">
                  {allBakery.allBakery && allBakery.allBakery[0].children[0]?.chil?.map((item) => (
                    <div key={item.id} className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                      <form
                        action=""
                        className="variants product-action-list"
                      >
                        <div className="product-thumbnail">
                          <a
                            className="image_thumb scale_hover"
                            href=""
                            title={item.title}
                          >
                            <img
                              width="400"
                              height="400"
                              src={item.image}
                              alt={item.title}
                            />
                          </a>
                        </div>

                        <div className="product-info">
                          <h3 className="product-name">
                            <a
                              className="line-clamp line-clamp-1"
                              href=""
                              title={item.title}
                            >{item.name}</a>
                          </h3>
                          <div className="price-box">
                            <span className="price">{item.price}{item.unit}</span>
                            <span className="compare-price">{item.priceSale}</span>
                          </div>
                          <div className="action">
                            <input
                              className="hidden"
                              type="hidden"
                              name="variantId"
                              value="95783097"
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

                            <a
                              href=""
                              className="setWishlist btn-wishlist btn-views"
                              title="Thêm vào yêu thích"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="#ffffff"
                                  d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  ))}

                  {/* <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Kem Dreamy Lady"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Kem Dreamy Lady"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Kem Dreamy Lady"
                              >Bánh Kem Dreamy Lady</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">380.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95783026"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Hoàng Kim"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Hoàng Kim"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Hoàng Kim"
                              >Bánh Hoàng Kim</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">320.000₫</span>
                              <span className="compare-price">400.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95783004"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Mousse Chocolate"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Mousse Chocolate"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Mousse Chocolate"
                              >Bánh Mousse Chocolate</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">390.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95782953"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Kem Sweet Heart 4"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Kem Sweet Heart 4"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Kem Sweet Heart 4"
                              >Bánh Kem Sweet Heart 4</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">150.000₫</span>
                              <span className="compare-price">170.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95782898"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Kem Amazing Chocolate"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Kem Amazing Chocolate"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Kem Amazing Chocolate"
                              >Bánh Kem Amazing Chocolate</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">380.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95782748"
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
                                data-handle="banh-kem-amazing-chocolate"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Kem Endless Love"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Kem Endless Love"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Kem Endless Love"
                              >Bánh Kem Endless Love</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">380.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95782729"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-sm-6 col-12 col-fix">
                        <form
                          action=""
                          className="variants product-action-list"
                        >
                          <div className="product-thumbnail">
                            <a
                              className="image_thumb scale_hover"
                              href=""
                              title="Bánh Kem Princess"
                            >
                              <img
                                width="400"
                                height="400"
                                src="https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820"
                                alt="Bánh Kem Princess"
                              />
                            </a>
                          </div>

                          <div className="product-info">
                            <h3 className="product-name">
                              <a
                                className="line-clamp line-clamp-1"
                                href=""
                                title="Bánh Kem Princess"
                              >Bánh Kem Princess</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">380.000₫</span>
                              <span className="compare-price">420.000₫</span>
                            </div>
                            <div className="action">
                              <input
                                className="hidden"
                                type="hidden"
                                name="variantId"
                                value="95782722"
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
                                data-handle="banh-kem-princess"
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

                              <a
                                href=""
                                className="setWishlist btn-wishlist btn-views"
                                title="Thêm vào yêu thích"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffffff"
                                    d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div> */}
                </div>

                <div className="see-more">
                  <a
                    href=""
                    title="Xem tất cả"
                  >Xem tất cả</a>
                </div>
              </div>

              <div className="tab-2 tab-content">
                <div className="see-more">
                  <a
                    href=""
                    title="Xem tất cả"
                  >Xem tất cả</a>
                </div>
              </div>

              <div className="tab-3 tab-content">
                <div className="see-more">
                  <a
                    href=""
                    title="Xem tất cả"
                  >Xem tất cả</a>
                </div>
              </div>

              <div className="tab-4 tab-content">
                <div className="see-more">
                  <a
                    href=""
                    title="Xem tất cả"
                  >Xem tất cả</a>
                </div>
              </div>

              <div className="tab-5 tab-content">
                <div className="see-more">
                  <a
                    href=""
                    title="Xem tất cả"
                  >Xem tất cả</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}