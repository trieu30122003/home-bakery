import { useSelector } from "react-redux";

export default function DanhGia() {
  const danhGia = useSelector((state) => state);

  return (
    <section
      className="section_danhgia"
      style={{ backgroundImage: "url(//bizweb.dktcdn.net/100/492/035/themes/919334/assets/background_danhgia.jpg?1694745247263);" }}
    >
      <div className="container">
        <div className="background"></div>
        <h3 className="title-index">
          <span>{danhGia.danhGia && danhGia.danhGia[0]?.name}</span>
          <img
            width="202"
            height="20"
            src={danhGia.danhGia && danhGia.danhGia[0].image}
            alt="title"
          />
        </h3>
        <div
          className="danhgia-slider swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
        >
          <div
            className="swiper-wrapper"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {danhGia.danhGia && danhGia.danhGia[0].children.map((item) => (
              <div
                key={item.id}
                className="swiper-slide swiper-slide-active"
                style={{ width: "540px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="avatar">
                    <img
                      width="80"
                      height="80"
                      alt={item.title}
                      src={item.image}
                    />
                    <div className="testimonial">
                      <h5>{item.name}</h5>
                      <span>{item.jobPosition} </span>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      {item.sortDescribe}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "540px", marginRight: "30px" }}
                >
                  <div className="item">
                    <div className="avatar">
                      <img
                        width="80"
                        height="80"
                        alt="Hồng Liêm"
                        src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1694745247263"
                      />
                      <div className="testimonial">
                        <h5>Hồng Liêm</h5>
                        <span>Thiết kế</span>
                      </div>
                    </div>
                    <div className="content">
                      <p>
                        Tất cả các loại bánh của Dola Bakery đều rất ngon, hương
                        vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất
                        dễ thương, tư vấn rất nhiệt tình. Cảm ơn Dola Bakery đã
                        mang lại cho tôi trãi nghiệm tuyệt vời. Tôi sẽ luôn ủng
                        hộ.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "540px", marginRight: "30px" }}
                >
                  <div className="item">
                    <div className="avatar">
                      <img
                        width="80"
                        height="80"
                        alt="Ngọc Tuyến"
                        src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1694745247263"
                      />
                      <div className="testimonial">
                        <h5>Ngọc Tuyến</h5>
                        <span>Đầu bếp</span>
                      </div>
                    </div>
                    <div className="content">
                      <p>
                        Tất cả các loại bánh của Dola Bakery đều rất ngon, hương
                        vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất
                        dễ thương, tư vấn rất nhiệt tình. Cảm ơn Dola Bakery đã
                        mang lại cho tôi trãi nghiệm tuyệt vời. Tôi sẽ luôn ủng
                        hộ.
                      </p>
                    </div>
                  </div>
                </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}