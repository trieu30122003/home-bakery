import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAbout } from "../../pages/redux/actions";

export default function About() {
  const about = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/api/menu');
  //       const about = await res.json();
  //       dispatch(setAbout(about));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // console.log("dataCHinhsach",about);
  return (
    <section className="section_about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="thumb-content thumb-content-left">
                  <h3 className="title">{about.about && about.about[0].name}</h3>
                  <span className="content">
                  {about.about && about.about[0].sortDescribe}
                  </span>
                  <div className="link">
                    <a
                      href=""
                      title="Xem ngay"
                    >Xem ngay</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumb-image-banner">
                  <a
                    href=""
                    title={about.about && about.about[1].title}
                  >
                    <img
                      alt={about.about && about.about[1].title}
                      width="960"
                      height="600"
                      src={about.about&& about.about[1].image}
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumb-image-banner">
                  <a
                    href=""
                    title={about.about && about.about[0].title}
                  ><img
                      alt={about.about&& about.about[0].title}
                      width="960"
                      height="600"
                      src={about.about && about.about[0].image}
                    /></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="thumb-content thumb-content-right">
                  <h3 className="title">{about.about && about.about[1].name}</h3>
                  <span className="content">
                  {about.about && about.about[1].sortDescribe}
                  </span>
                  <div className="link">
                    <a
                      href=""
                      title="Xem ngay"
                    >Xem ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}