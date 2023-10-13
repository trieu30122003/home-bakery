import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../pages/redux/actions";

export default function Header() {
  const [marginLeft, setMarginLeft] = useState("0px");
  const [isActive, setIsActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [openMenu, setOpenMenu] = useState("");
  const [openMenuChil, setOpenMenuChil] = useState("");
  const [openBanhKem, setOpenBanhKem] = useState("");
  const [openBanhMi, setOpenBanhMi] = useState("");
  const [openNgot, setOpenNgot] = useState("");
  const [openKho, setOpenKho] = useState("");
  const [openTrangMieng, setOpenTrangMieng] = useState("");
  const [openDongLanh, setOpenDongLanh] = useState("");
  const [openTheoMua, setOpenTheoMua] = useState("");


  const handeClickMenu = () => {
    setOpenMenu("current");
  }
  const handeClickNgot = () => {
    setOpenNgot("current");
  }
  const handeClickKho = () => {
    setOpenKho("current");
  }
  const handeClickTrangMieng = () => {
    setOpenTrangMieng("current");
  }
  const handeClickDongLanh = () => {
    setOpenDongLanh("current");
  }
  const handeClickTheoMua = () => {
    setOpenTheoMua("current");
  }
  const handeClickBanhMi = () => {
    setOpenBanhMi("current");
  }
  const handeClickBanhKem = () => {
    setOpenBanhKem("current");
  }
  const handeClickMenuChil = () => {
    setOpenMenuChil("current");
  }
  const handeClickCLoseMenuChil = () => {
    setOpenMenuChil("current");
  }
  const handeClickCloseMenu = () => {
    setOpenMenu("");
  }
  const handleClick = (tab) => {
    if (tab === 'products') {
      setActiveTab('products');
    } else if (tab === 'news') {
      setActiveTab('news');
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const filteredResults = data.allBakery[0].children[0].chil.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  const handleSearchNews = (event) => {
    setInputValue(event.target.value);
    const filteredResults = data.tinTuc[0].children.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchNews(filteredResults);
  };
  const activeClick = () => {
    setIsActive("active");
  };
  const NoactiveClick = () => {
    setIsActive("");
  };
  const nextClick = () => {
    setMarginLeft("-291px");
  };
  const prevClick = () => {
    setMarginLeft("0px");
  };
  // const dispatch = useDispatch();

  // useEffect(() => { 
  //   dispatch(setData(initialData));
  // }, [dispatch,  initialData]);
  // // console.log( initialData);
  const data = useSelector((state) => state);
  const site = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/menu');
        const data = await res.json();
        dispatch(setData(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`opacity_menu ${openMenu ? 'current' : ''}`}></div>
      <header className={`header ${scrolled ? 'hSticky' : ''} ${openMenu ? 'current' : ''}`}>
        <div className="container">
          <div className="row row-header align-items-center">
            <div className="menu-bar d-lg-none d-flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-bars fa-w-14"
                onClick={handeClickMenu}
              >
                <path
                  fill="#ffffff"
                  d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                  className=""
                ></path>
              </svg>
            </div>

            <div className="col-lg-2">
              <a href="" className="logo" title="Logo">
                <img
                  width="270"
                  height="256"
                  src={site.site && site.site[0].logo}
                  alt={site.site && site.site[0].title}
                />
              </a>
            </div>

            <div className="col-lg-8 header-menu">
              <div style={{ position: "relative" }}>
                <div className="header-menu-des">
                  <nav className={`header-nav ${openMenu ? 'current' : ''}`}>
                    <ul className="item_big" style={{ marginLeft }}>
                      <li className="d-lg-none d-block account-mb">
                        <ul>
                          <li>
                            <a
                              href=""
                              title="Đăng ký"
                            >
                              Đăng ký
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              title="Đăng nhập"
                            >
                              Đăng nhập
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="d-block d-lg-none title-danhmuc delete-button" > 
                        <span onClick={handeClickCloseMenu}>Close</span>
                      </li>
                      <li className="nav-item active">
                        <a
                          className="a-img"
                          href=""
                          title={data.data && data.data[0] && data.data[0].title}
                        >
                          {data.data && data.data[0] && data.data[0].name}
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="a-img"
                          href=""
                          title={data.data && data.data[1] && data.data[1].title}
                        >
                          {data.data && data.data[1] && data.data[1].name}
                        </a>
                      </li>

                      <li className={`nav-item has-mega ${openMenuChil ? 'current' : ''}`}>
                        <a
                          className="a-img caret-down"
                          href=""
                          title={data.data && data.data[2] && data.data[2].title}
                        >
                          {data.data && data.data[2] && data.data[2].name}
                        </a>
                        <i className="fa fa-caret-down down" onClick={handeClickMenuChil}></i>

                        <div className="mega-content d-lg-block d-none">
                          <ul className="level0">
                            <li
                              className="level1 parent item fix-navs"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[0].title}
                              >{data.data && data.data[2] && data.data[2].children[0].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[0].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[0].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[0].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[0].chil[1].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[0].chil[2].title}
                                  >{data.data && data.data[2] && data.data[2].children[0].chil[2].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[0].chil[3].title}
                                  >{data.data && data.data[2] && data.data[2].children[0].chil[3].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li
                              className="level1 parent item fix-navs"
                              data-title="Bánh mì"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[2].title}
                              >{data.data && data.data[2] && data.data[2].children[2].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[2].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[2].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[2].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[2].chil[1].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[2].chil[2].title}
                                  >{data.data && data.data[2] && data.data[2].children[2].chil[2].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[2].chil[3].title}
                                  >{data.data && data.data[2] && data.data[2].children[2].chil[3].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[2].chil[4].title}
                                  >{data.data && data.data[2] && data.data[2].children[2].chil[4].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[2].chil[5].title}
                                  >{data.data && data.data[2] && data.data[2].children[2].chil[5].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li
                              className="level1 parent item fix-navs"
                              data-title="Bánh ngọt"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[1].title}
                              >{data.data && data.data[2] && data.data[2].children[1].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[1].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[1].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[1].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[1].chil[1].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[1].chil[2].title}
                                  >{data.data && data.data[2] && data.data[2].children[1].chil[2].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[1].chil[3].title}
                                  >{data.data && data.data[2] && data.data[2].children[1].chil[3].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li
                              className="level1 parent item fix-navs"
                              data-title="Bánh tráng miệng"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[3].title}
                              >{data.data && data.data[2] && data.data[2].children[3].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[3].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[3].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[3].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[3].chil[1].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[3].chil[2].title}
                                  >{data.data && data.data[2] && data.data[2].children[3].chil[2].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[3].chil[3].title}
                                  >{data.data && data.data[2] && data.data[2].children[3].chil[3].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li
                              className="level1 parent item fix-navs"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[4].title}
                              >{data.data && data.data[2] && data.data[2].children[4].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[4].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[4].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[4].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[4].chil[1].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[4].chil[2].title}
                                  >{data.data && data.data[2] && data.data[2].children[4].chil[2].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li
                              className="level1 parent item fix-navs"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[5].title}
                              >{data.data && data.data[2] && data.data[2].children[5].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[5].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[5].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[5].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[5].chil[1].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li
                              className="level1 parent item fix-navs"
                            >
                              <a
                                className="hmega"
                                href=""
                                title={data.data && data.data[2] && data.data[2].children[6].title}
                              >{data.data && data.data[2] && data.data[2].children[6].name}</a>
                              <ul className="level1">
                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[6].chil[0].title}
                                  >{data.data && data.data[2] && data.data[2].children[6].chil[0].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[6].chil[1].title}
                                  >{data.data && data.data[2] && data.data[2].children[6].chil[1].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[6].chil[2].title}
                                  >{data.data && data.data[2] && data.data[2].children[6].chil[2].name}</a>
                                </li>

                                <li className="level2">
                                  <a
                                    href=""
                                    title={data.data && data.data[2] && data.data[2].children[6].chil[3].title}
                                  >{data.data && data.data[2] && data.data[2].children[6].chil[3].name}</a>
                                </li>
                              </ul>
                            </li>

                            <li className="level1 parent item">
                              <a
                                className="hmega"
                                href=""
                                title="Đồ uống"
                              >{data.data && data.data[2] && data.data[2].children[7].name}</a>
                            </li>
                          </ul>
                        </div>
                        <ul className="item_small d-lg-none d-block">
                          <li className={`tap ${openBanhKem ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[0].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[0].name}
                            </a>
                            <i className="fa fa-caret-down tap-icon" onClick={handeClickBanhKem}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[0].chil.map((item) => (
                              <li key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                            </ul>
                          </li>
                          <li className={`banh-mi ${openBanhMi ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[2].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[2].name}
                            </a>
                            <i className="fa fa-caret-down icon-banh-mi" onClick={handeClickBanhMi}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[2].chil.map((item) => (
                              <li key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                            </ul>
                          </li>
                          <li className={`banh-ngot ${openNgot ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[1].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[1].name}
                            </a>
                            <i className="fa fa-caret-down icon-banh-ngot" onClick={handeClickNgot}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[1].chil.map((item) => (
                              <li key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                              
                            </ul>
                          </li>
                          <li className={`banh-trang-mieng ${openTrangMieng ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[3].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[3].name}
                            </a>
                            <i className="fa fa-caret-down icon-banh-trang-mieng" onClick={handeClickTrangMieng}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[3].chil.map((item) => (
                              <li  key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                              
                            </ul>
                          </li>
                          <li className={`banh-kho ${openKho ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[4].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[4].name}
                            </a>
                            <i className="fa fa-caret-down icon-banh-kho" onClick={handeClickKho}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[4].chil.map((item) => (
                              <li  key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                            </ul>
                          </li>
                          <li className={`banh-dong-lanh ${openDongLanh ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[5].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[5].name}
                            </a>
                            <i className="fa fa-caret-down icon-banh-dong-lanh" onClick={handeClickDongLanh}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[5].chil.map((item) => (
                              <li  key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                            </ul>
                          </li>
                          <li className={`banh-theo-mua ${openTheoMua ? "current" : ""}`}>
                            <a
                              className="caret-down"
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[6].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[6].name}
                            </a>
                            <i className="fa fa-caret-down icon-banh-theo-mua" onClick={handeClickTheoMua}></i>
                            <ul>
                            {data.data && data.data[2] && data.data[2].children[6].chil.map((item) => (
                              <li  key={item.id}>
                                <a
                                  href=""
                                  title={item.title}
                                  className="a3"
                                >{item.name}</a>
                              </li>
                            ))}
                            </ul>
                          </li>
                          <li>
                            <a
                              className=""
                              href=""
                              title={data.data && data.data[2] && data.data[2].children[7].title}
                            >
                              {data.data && data.data[2] && data.data[2].children[7].name}
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          className="a-img"
                          href=""
                          title={data.data && data.data[3] && data.data[3].title}
                        >
                          {data.data && data.data[3] && data.data[3].name}
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="a-img"
                          href=""
                          title={data.data && data.data[4] && data.data[4].title}
                        >
                          {data.data && data.data[4] && data.data[4].name}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="a-img"
                          href=""
                          title={data.data && data.data[4] && data.data[5].title}
                        >
                          {data.data && data.data[4] && data.data[5].name}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="a-img"
                          href=""
                          title={data.data && data.data[4] && data.data[6].title}
                        >
                          {data.data && data.data[4] && data.data[6].name}
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="control-menu d-none d-lg-block">
                    <a href="#" id="prev" onClick={prevClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg></a>
                    <a href="#" id="next" onClick={nextClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fff" d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 header-control">
              <ul className="ul-control">
                <li className="header-wishlist d-flex">
                  <a
                    title="Tìm kiếm"
                    href="#"
                    className="button-search"
                    onClick={activeClick}
                  >
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="header-account d-lg-flex d-none">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                  </div>

                  <ul>
                    <li>
                      <a
                        href=""
                        title="Đăng ký"
                      >
                        Đăng ký
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        title="Đăng nhập"
                      >
                        Đăng nhập
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-wishlist d-flex">
                  <a
                    title="Sản phẩm yêu thích"
                    href=""
                    className="button-wishlist"
                  >
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </a>
                </li>

                <li className="header-cart block-cart d-flex">
                  <a href="" title="Giỏ hàng">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`popup-search ${isActive ? 'active' : ''}`}>
          <div className="search-header">
            <div className="search-smart">
              <form
                action=""
                className="header-search-form input-group search-bar"
                role="search"
              >
                <input
                  type="text"
                  name="query"
                  required=""
                  className="input-group-field auto-search search-auto form-control"
                  placeholder="Nhập tên sản phẩm"
                  autoComplete="off"
                  value={inputValue}
                  onChange={(event) => {
                    handleInputChange(event);
                    handleSearchNews(event);
                  }}

                />
                <button
                  type="submit"
                  className="btn icon-fallback-text search-button"
                  aria-label="Tìm kiếm"
                  title="Tìm kiếm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fff"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    ></path>
                  </svg>
                </button>
                <div className={`search-suggest${inputValue ? ' open' : ''}`}>
                  <ul className="smart-search-title">
                    <li data-tab="#tab-search-1" className={activeTab === 'products' ? 'active' : ''}><a href="#" onClick={() => handleClick('products')} title="Sản phẩm">Sản phẩm</a></li>
                    <li data-tab="#tab-search-2" style={{ marginLeft: "5px" }}><a href="#" onClick={() => handleClick('news')} title="Tin tức">Tin tức</a></li>
                  </ul>
                  <div className="list-search-suggest">
                    <div className={`list-search list-search-style ${activeTab === 'products' ? 'active' : ''}`} id="tab-search-1">
                      {searchResults.slice(0, 4).map((item) => (
                        <div key={item.id} className="product-smart">
                          <a className="image_thumb" href="#" title={item.title}>
                            <img width="370" height="480" src={item.image} alt={item.title} />
                          </a>
                          <div className="product-info">
                            <h3 className="product-name line-clamp line-clamp-1">
                              <a href="" title={item.title}>{item.name}</a>
                            </h3>
                            <div className="price-box">
                              <span className="price">{item.price}{item.unit}</span>
                              <span className="compare-price">{item.priceSale}</span>
                            </div>
                          </div>
                        </div>

                      ))}
                    </div>
                    

                    <div className={`list-search2 list-search-style ${activeTab === 'news' ? 'active' : ''}`} id="tab-search-2">
                      {searchNews.slice(0, 4).map((item) => (
                        <div key={item.id} className="art-smart">
                          <a className="image_thumb" href="#" title={item.title}>
                            <img width="370" height="480" src={item.image} />
                          </a>
                          <div className="product-info">
                            <h3 className="product-name">
                              <a href="#" title={item.title}>{item.name}</a>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="see-more">
                      <a href="#" title="Xem tất cả">Xem tất cả</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <a href="#" className="close-popup-search" onClick={NoactiveClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </a>
        </div>
      </header>
    </div>

  )
}

// export async function getServerSideProps() {
//   // Lấy dữ liệu từ endpoint '/api/menu' ở phía server
//   const res = await fetch('http://localhost:3000/api/menu');
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       initialData: data,
//     },
//   };
// }