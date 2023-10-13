import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTinTuc } from "../../pages/redux/actions";

export default function Blog() {
  const tinTuc = useSelector((state) => state);
  return (
    <section className="section_blog">
      <div className="container">
        <h3 className="title-index">
          <a
            className="title-name"
            href=""
            title="Tin tức mới nhất"
          >{tinTuc.tinTuc && tinTuc.tinTuc[0].name}
          </a>
          <img
            width="202"
            height="20"
            src={tinTuc.tinTuc && tinTuc.tinTuc[0].image}
            alt="title"
          />
        </h3>
        <div className="block-blog">
          <div
            className="blog-swiper swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
          style={{ cursor: "grab" }}
          >
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {tinTuc.tinTuc && tinTuc.tinTuc[0].children.map((item) => (
                <div
                  key={item.id}
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "356px", marginRight: "20px" }}
                >
                  <div className="item-blog">
                    <div className="block-thumb">
                      <a
                        className="thumb"
                        href=""
                        title={item.title}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      </a>

                      <div className="time-post">17/08/2023</div>
                    </div>
                    <div className="block-content">
                      <h3>
                        <a
                          className="line-clamp line-clamp-1"
                          href=""
                          title={item.title}
                        >{item.name}</a>
                      </h3>
                      <p className="justify line-clamp line-clamp-3">
                        {item.sortDescribe}
                      </p>
                    </div>
                  </div>
                </div>
                ))}
{/*                 
                <div
                className="swiper-slide swiper-slide-next"
                style={{ width: "356px", marginRight: "20px" }}
              >
                <div className="item-blog">
                  <div className="block-thumb">
                    <a
                      className="thumb"
                      href=""
                      title="Croissant ngàn lớp - đa dạng cách thưởng thức"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                        alt="Croissant ngàn lớp - đa dạng cách thưởng thức"
                      />
                    </a>

                    <div className="time-post">17/08/2023</div>
                  </div>
                  <div className="block-content">
                    <h3>
                      <a
                        className="line-clamp line-clamp-1"
                        href=""
                        title="Croissant ngàn lớp - đa dạng cách thưởng thức"
                      >Croissant ngàn lớp - đa dạng cách thưởng thức</a>
                    </h3>
                    <p className="justify line-clamp line-clamp-3">
                      &nbsp;Những chiếc bánh sừng bò với hương bơ thơm béo đặc
                      trưng lại còn đưa miệng với độ giòn xốp, dai dai từ
                      ngàn lớp bánh. Nổi bật với hình...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "356px", marginRight: "20px" }}
              >
                <div className="item-blog">
                  <div className="block-thumb">
                    <a
                      className="thumb"
                      href=""
                      title="Bánh Tart thơm ngậy không thể bỏ lỡ"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                        alt="Bánh Tart thơm ngậy không thể bỏ lỡ"
                      />
                    </a>

                    <div className="time-post">17/08/2023</div>
                  </div>
                  <div className="block-content">
                    <h3>
                      <a
                        className="line-clamp line-clamp-1"
                        href=""
                        title="Bánh Tart thơm ngậy không thể bỏ lỡ"
                      >Bánh Tart thơm ngậy không thể bỏ lỡ</a>
                    </h3>
                    <p className="justify line-clamp line-clamp-3">
                      &nbsp;Tart trứng là loại bánh đường phố nổi tiếng ở Hong
                      Kong được rất nhiều người yêu thích. Không những thế,
                      trong bảng xếp hạng 50 loại món ăn ngon...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "356px", marginRight: "20px" }}
              >
                <div className="item-blog">
                  <div className="block-thumb">
                    <a
                      className="thumb"
                      href=""
                      title="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                        alt="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                      />
                    </a>

                    <div className="time-post">17/08/2023</div>
                  </div>
                  <div className="block-content">
                    <h3>
                      <a
                        className="line-clamp line-clamp-1"
                        href=""
                        title="Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến"
                      >Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến</a>
                    </h3>
                    <p className="justify line-clamp line-clamp-3">
                      &nbsp;Bánh đông lạnh đã dần trở thành một sản phẩm quen
                      thuộc cho các Mẹ Đảm sau một thời gian dài giãn cách. Sở
                      dĩ, bánh đông lạnh được nhiều...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "356px", marginRight: "20px" }}
              >
                <div className="item-blog">
                  <div className="block-thumb">
                    <a
                      className="thumb"
                      href=""
                      title="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_3.png?1694745247263"
                        alt="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                      />
                    </a>

                    <div className="time-post">17/08/2023</div>
                  </div>
                  <div className="block-content">
                    <h3>
                      <a
                        className="line-clamp line-clamp-1"
                        href=""
                        title="Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola"
                      >Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại
                        Dola</a>
                    </h3>
                    <p className="justify line-clamp line-clamp-3">
                      Đối với những người có niềm đam mê với đồ ngọt thì chắc
                      chắn bánh ngọt đã trở thành một phần không thể thiếu.
                      Những chiếc bánh ngọt hớp hồn...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{ width: "356px", marginRight: "20px" }}
              >
                <div className="item-blog">
                  <div className="block-thumb">
                    <a
                      className="thumb"
                      href=""
                      title="Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
                        alt="Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola"
                      />
                    </a>

                    <div className="time-post">17/08/2023</div>
                  </div>
                  <div className="block-content">
                    <h3>
                      <a
                        className="line-clamp line-clamp-1"
                        href=""
                        title="Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola"
                      >Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại
                        Dola</a>
                    </h3>
                    <p className="justify line-clamp line-clamp-3">
                      &nbsp; Bánh quy khô&nbsp;là món ăn thơm ngon, bổ dưỡng,
                      được nhiều người tiêu dùng ưa thích lựa chọn. Không
                      giống những loại bánh khác, bánh quy đặc biệt với
                      hương...
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}