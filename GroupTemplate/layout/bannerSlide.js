import { useSelector } from "react-redux";

export default function BannerSlide() {
  const template = useSelector((state) => state);
  return (
    <section className="section_slider">
          <div
            className="home-slider swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"

          >
            <div className="swiper-wrapper" style={{ transitionDuration: "0ms" }}>
              <div
                className="swiper-slide swiper-slide-active"
                style={{
                  width: "1233px",
                  opacity: "1",
                  transform: "translate3d(0px, 0px, 0px)",
                  transitionDuration: "0ms"
                }}
              >
                <div className="clearfix thumb-image">
                  <picture>
                    <source
                      media="(max-width: 567px)"

                    />
                    <img
                      width="1881"
                      height="967"
                      src={template.template && template.template[0].image}
                      alt="Slider"
                      className="img-responsive"
                    />
                  </picture>
                </div>
                <div className="thumb-slider-text">
                  <div className="slider-text">
                    <h2 className="title">{template.template && template.template[0].name}</h2>
                    <div className="content">{template.template && template.template[0].sortDescribe}</div>
                    <a
                      className="button"
                      href=""
                      title="Xem ngay"
                    >Xem ngay</a>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                style={{
                  width: "1233px",
                  opacity: "0",
                  transform: "translate3d(-1233px, 0px, 0px)",
                  transitionDuration: "0ms"
                }}
              >
                <div className="clearfix thumb-image">
                  <picture>
                    <source
                      media="(max-width: 567px)"
                    />
                    <img
                      width="1881"
                      height="967"
                      src={template.template && template.template[1].image}
                      alt="Slider"
                      className="img-responsive"
                    />
                  </picture>
                </div>
                <div className="thumb-slider-text">
                  <div className="slider-text">
                    <h2 className="title">{template.template && template.template[1].name}</h2>
                    <div className="content">{template.template && template.template[1].sortDescribe}</div>
                    <a
                      className="button"
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