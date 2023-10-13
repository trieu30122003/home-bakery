import Head from 'next/head'
import Swiper from "../styles/swiper";
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChinhSach from '../GroupTemplate/layout/ChinhSach';
import Flasale from '../GroupTemplate/layout/Flasale';
import About from '../GroupTemplate/layout/About';
import Banner1 from '../GroupTemplate/layout/Banner1';
import Banner2 from '../GroupTemplate/layout/Banner2';
import BannerSlide from '../GroupTemplate/layout/bannerSlide';
import DanhMuc from '../GroupTemplate/layout/DanhMuc';
import NoiBat from '../GroupTemplate/layout/NoiBat';
import New from '../GroupTemplate/layout/new';
import TatCaBanh from '../GroupTemplate/layout/TatCaBanh';
import Blog from '../GroupTemplate/layout/Blog';
import DanhGia from '../GroupTemplate/layout/DanhGia';
import Mailchimp from '../GroupTemplate/layout/mailchimp';
import Instagram from '../GroupTemplate/layout/Instagram';
import Video from '../GroupTemplate/layout/video';

export default function Home() {
  const site = useSelector((state) => state);

  var swiperSlide = new Swiper(".home-slider", {
    autoplay: true,
    effect: "fade",
    pagination: {
      el: ".home-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".home-slider .swiper-button-next",
      prevEl: ".home-slider .swiper-button-prev",
    },
    
  });
  var swiperchinhsach = new Swiper(".chinhsach-swiper", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    spaceBetween: 30,
    roundLengths: true,
    slideToClickedSlide: false,
    navigation: {
      nextEl: ".chinhsach-swiper .swiper-button-next",
      prevEl: ".chinhsach-swiper .swiper-button-prev",
    },
    autoplay: false,
    breakpoints: {
      300: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var swiperdanhmuc = new Swiper(".danhmuc-slider", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    autoplay: false,
    navigation: {
      nextEl: ".section_danhmuc .section-next",
      prevEl: ".section_danhmuc .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  var productSwiper1 = new Swiper(".product-swiper1", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    autoplay: false,
    navigation: {
      nextEl: ".product-swiper1 .section-next",
      prevEl: ".product-swiper1 .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  var productSwiper1 = new Swiper(".product-swiper1", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    autoplay: false,
    navigation: {
      nextEl: ".product-swiper1 .section-next",
      prevEl: ".product-swiper1 .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  var blogSwiper = new Swiper(".blog-swiper", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    gridRow: 2,
    autoplay: false,
    navigation: {
      nextEl: ".blog-swiper .section-next",
      prevEl: ".blog-swiper .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  var danhGiaSlider = new Swiper(".danhgia-slider", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    gridRow: 2,
    autoplay: false,
    navigation: {
      nextEl: ".danhgia-slider .section-next",
      prevEl: ".danhgia-slider .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
  var igSwiper = new Swiper(".instagram-swiper", {
    slidesPerView: 3,
    loop: false,
    grabCursor: true,
    roundLengths: true,
    slideToClickedSlide: false,
    spaceBetween: 20,
    gridRow: 2,
    autoplay: false,
    navigation: {
      nextEl: ".danhgia-slider .section-next",
      prevEl: ".danhgia-slider .section-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
  return (
    <div>
      <Head>
        <title>{site.site && site.site[0].name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={site.site && site.site[0].icon} />
      </Head>
      <Header />
      <div className="bodywrap">
        <BannerSlide />
        <ChinhSach />
        <DanhMuc />
        <Flasale />
        <NoiBat />
        <Banner1 />
        <New />
        <Banner2 />
        <TatCaBanh />
        <About />
        <Blog />
        <DanhGia />
        <Mailchimp />
        <Instagram />
        <Video />
      </div>
      <Footer />
    </div>
  )
}
