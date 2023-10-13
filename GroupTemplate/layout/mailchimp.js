import { useSelector } from "react-redux";

export default function Mailchimp() {
  const send = useSelector((state) => state);

  return (
    <section className="section_mailchimp">
      <div className="container">
        <div className="row no-margin align-items-center">
          <div className="col-lg-6 no-padding">
            <img
              width="960"
              height="540"
              src={send.mailchimp && send.mailchimp[0].image}
              alt="Đăng ký nhận tin"
            />
          </div>
          <div className="col-lg-6 no-padding">
            <div className="thumb">
              <div className="title">{send.mailchimp && send.mailchimp[0].name}</div>
              <div className="content">
              {send.mailchimp && send.mailchimp[0].sortDescribe}
              </div>
              <form
                id="mc-form"
                className="newsletter-form"
                data-toggle="validator"
              >
                <input
                  aria-label="Địa chỉ Email"
                  type="email"
                  className="form-control"
                  placeholder="Nhập email nhận tin khuyến mãi"
                  name="EMAIL"
                  required=""
                />
                <button
                  className="btn btn-default"
                  type="submit"
                  aria-label="Đăng ký nhận tin"
                  name="subscribe"
                >
                  ĐĂNG KÝ
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}