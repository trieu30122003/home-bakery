import { useSelector } from "react-redux";

export default function Footer() {
  const site = useSelector((state) => state);
  const menuFooter = useSelector((state) => state);

  return (
    <footer className="footer">
      <div className="mid-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4 ft-info col-footer">
              <a
                href=""
                className="logo-ft"
                title="Logo"
              >
                <img
                  style={{ maxHeight: "100px", width: "auto" }}
                  width="270"
                  height="256"
                  src={site.site && site.site[0].icon}
                  alt={site.site && site.site[0].title}
                />
              </a>
              <div className="content-ft">
                {site.site && site.site[0].sortDescribe}
              </div>
              <h4 className="title-menu">Hình thức thanh toán</h4>
              <ul className="thanhtoan">
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 1"
                    src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_3.png?1694745247263"
                  />
                </li>
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 2"
                    src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_1.png?1694745247263"
                  />
                </li>
                <li>
                  <img
                    width="57"
                    height="35"
                    alt="Payment 3"
                    src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_2.png?1694745247263"
                  />
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-2 link-list col-footer">
              <h4 className="title-menu title-menu2">{menuFooter.menuFooter && menuFooter.menuFooter[0].name}</h4>
              <ul className="list-menu">
                {menuFooter.menuFooter && menuFooter.menuFooter[0].children && menuFooter.menuFooter[0].children.map((item) => (
                  <li key={item.id} >
                    <a
                      href={item.url}
                      title={item.title}
                    >{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 link-list col-footer">
              <h4 className="title-menu title-menu2">Thông tin chung</h4>
              <div className="group-address">
                <ul>
                  <li>
                    <b>Địa chỉ: </b><span>{site.site && site.site[0].address}</span>
                  </li>
                  <li>
                    <b>Điện thoại: </b><a title="1900 6750" href="tel:19006750">{site.site && site.site[0].phone}0</a>
                  </li>
                  <li>
                    <b>Email: </b><a title={site.site && site.site[0].email} href={site.site && site.site[0].email}
                    >{site.site && site.site[0].email}</a>
                  </li>
                </ul>
              </div>
              <h4 className="title-menu">Liên kết sàn</h4>
              <ul className="social">
                <li>
                  <a href="" title="Shopee"
                  ><img
                      width="32"
                      height="32"
                      title="Shopee"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1694745247263"
                    /></a>
                </li>

                <li>
                  <a href="" title="Lazada"
                  ><img
                      width="32"
                      height="32"
                      title="Lazada"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1694745247263"
                    /></a>
                </li>

                <li>
                  <a href="" title="Tiki"
                  ><img
                      width="32"
                      height="32"
                      title="Tiki"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1694745247263"
                    /></a>
                </li>

                <li>
                  <a href="" title="Sendo"
                  ><img
                      width="32"
                      height="32"
                      title="Sendo"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1694745247263"
                    /></a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-3">
              <h4 className="title-menu">Hỗ trợ</h4>
              <ul className="call-footer">
                <li>
                  <span className="title">MUA ONLINE (08:00 - 21:00 mỗi ngày)</span>
                  <a href="tel:19006750" title="19006750">19006750</a>
                  <span className="content"
                  >Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
                </li>

                <li>
                  <span className="title"
                  >GÓP Ý &amp; KHIẾU NẠI (08:30 - 20:30)</span>
                  <a href="tel:19006750" title="19006750">19006750</a>
                  <span className="content"
                  >Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
                </li>
              </ul>

              <h4 className="title-menu">Mạng xã hội</h4>

              <ul className="social">
                <li>
                  <a href="" title="Zalo"
                  ><img
                      width="32"
                      height="32"
                      title="Zalo"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                    /></a>
                </li>

                <li>
                  <a href="" title="Facebook"
                  ><img
                      width="32"
                      height="32"
                      title="Facebook"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                    /></a>
                </li>

                <li>
                  <a href="" title="Youtube"
                  ><img
                      width="32"
                      height="32"
                      title="Youtube"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                    /></a>
                </li>

                <li>
                  <a href="" title="Google"
                  ><img
                      width="32"
                      height="32"
                      title="Google"
                      src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263"
                    /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <span className="copy-right"
              >Bản quyền thuộc về <b>Dola theme</b>.</span>
              <span className="opacity1">
                Cung cấp bởi
                <a
                  href=""
                  rel="noopener"
                  title="Sapo"
                  target="_blank"
                >Sapo</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}