import React from "react";
import { useSelector } from "react-redux";

export default function ChinhSach() {
  const chinhSach = useSelector((state) => state);
  return (
    <section className="section_chinhsach">
      <div className="container">
        <div
          className="chinhsach-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
        >
          <div
            className="swiper-wrapper"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
          {chinhSach.chinhSach && chinhSach.chinhSach.map((item) => (
            <a
              key={item.id}
              href=""
              className="swiper-slide swiper-slide-active"
              title={item.title}
              style={{ width: "255px", marginRight: "30px" }}
            >
              <img
                width="40"
                height="40"
                src={item.image}
                alt={item.title}
              />
              <div className="text">
                <span className="title">{item.name}</span>
                <span className="des"
                >{item.sortDescribe}</span>
              </div>
            </a>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
