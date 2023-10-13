import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DanhMuc() {
  const danhMuc = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/menu');
  //       const danhMuc = await res.json();
  //       dispatch(setChinhSach(danhMuc));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return(
    <section className="section_danhmuc">
          <div className="container">
            <div
              className="danhmuc-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
              style={{ cursor: "grab" }}
            >
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
              {danhMuc.danhMuc && danhMuc.danhMuc.map((item) => (
                <div
                  key={item.id}
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "262px", marginRight: "20px" }}
                >
                  <div className="thumb">
                    <picture>
                      <source
                        media="(max-width: 567px)"

                      />
                      <img
                        width="320"
                        height="400"
                        src={item.image}
                        alt={item.title}
                      />
                    </picture>
                  </div>
                  <h3>
                    {item.name}
                    <a
                      href=""
                      title={item.title}
                    >
                      {item.sortDescribe}
                    </a>
                  </h3>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
  )
}