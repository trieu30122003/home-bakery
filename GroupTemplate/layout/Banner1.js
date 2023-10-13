import React, { useEffect } from "react";
import Swiper from "../../styles/swiper";
import { useDispatch, useSelector } from "react-redux";
import { setBanner } from "../../pages/redux/actions";

export default function Banner1() {
  const banner = useSelector((state) => state);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/menu');
  //       const banner = await res.json();
  //       dispatch(setBanner(banner));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <section className="section_1_banner">
    <div className="container">
      <a
        className="thumb-image-banner"
        href="#"
        title="Banner"
      >
        <img
          width="1920"
          height="500"
          src={banner.banner && banner.banner[0]?.image}
          alt={banner.banner && banner.banner[0]?.title}
        />
      </a>
    </div>
  </section>
  )
}