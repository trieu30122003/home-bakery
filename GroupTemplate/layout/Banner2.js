import React, { useEffect } from "react";
import Swiper from "../../styles/swiper";
import { useDispatch, useSelector } from "react-redux";
import { setBanner2 } from "../../pages/redux/actions";

export default function Banner2(){
  const banner = useSelector((state) => state);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/menu');
  //       const banner = await res.json();
  //       dispatch(setBanner2(banner));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return(
    <section className="section_2_banner">
          <div className="container">
            <div className="row">
            {banner.banner2 && banner.banner2.map((item) => (
              

              <div key={item.id} className="col-md-6">
                <div className="thumb-banner">
                  <div className="thumb-image">
                    <img
                      width="810"
                      height="525"
                      src={item.image}
                      alt="Bánh nướng &amp; Sữa"
                    />
                  </div>
                  <div className="thumb-content">
                    <h3 className="title">{item.name}</h3>
                    <p>{item.sortDescribe}</p>
                    <div className="url">
                      <a
                        href=""
                        title="Khám phá tất cả"
                      >Khám phá tất cả</a>

                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
  )
}