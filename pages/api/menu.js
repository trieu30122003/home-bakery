export default function menu(req, res) {
  const site = [
    {
      id: 30,
      name: "Dola Bakery",
      title: "Dola Bakery",
      address: "70 Lữ Gia, Phường 15, Quận 11, TP.HCM",
      phone: "1900 6750",
      email: "support@sapo.vn",
      logo: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/logo.png?1694745247263",
      icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/favicon.png?1694745247263",
      sortDescribe: "Hãy đến với Dola Bakery và hãy để những món bánh tuyệt vời của chúng tôi làm cho cuộc sống bạn thêm ngọt ngào"
    }
  ]
  const data = [
    {
      id: 1,
      name: "Trang chủ",
      title: "Trang chủ",
    },
    {
      id: 2,
      name: "Giới thiệu",
      title: "Giới thiệu",
    },
    {
      id: 3,
      name: "Sản phẩm",
      title: "Sản phẩm",
      children: [
        {
          id: "cd1",
          name: "Bánh kem",
          title: "Bánh kem",
          chil: [
            {
              id: "cdc1",
              name: "Bánh sinh nhật",
              title: "Bánh sinh nhật",
            },
            {
              id: "cdc2",
              name: "Bánh sự kiện",
              title: "Bánh sự kiện",
            },
            {
              id: "cdc3",
              name: "Bánh cho trẻ em",
              title: "Bánh cho trẻ em",
            },
            {
              id: "cdc4",
              name: "Bánh kem đặt trước",
              title: "Bánh kem đặt trước",
            }
          ]
        },
        {
          id: "cd2",
          name: "Bánh ngọt",
          title: "Bánh ngọt",
          chil: [
            {
              id: "cdc5",
              name: "Bánh bông lan",
              title: "Bánh bông lan",
            },
            {
              id: "cdc6",
              name: "Bánh Chiffon",
              title: "Bánh Chiffon",
            },
            {
              id: "cdc7",
              name: "Bánh cuộn",
              title: "Bánh cuộn",
            },
            {
              id: "cdc8",
              name: "Bánh su kem",
              title: "Bánh su kem",
            }
          ]
        },
        {
          id: "cd3",
          name: "Bánh mì",
          title: "Bánh mì",
          chil: [
            {
              id: "cdc9",
              name: "Bánh mì kẹp",
              title: "Bánh mẹ kẹp",
            },
            {
              id: "cdc10",
              name: "Bánh mì gối",
              title: "Bánh mì gối",
            },
            {
              id: "cdc11",
              name: "Bánh cán lớp",
              title: "Bánh cán lớp",
            },
            {
              id: "cdc12",
              name: "Bánh mì Baguette",
              title: "Bánh mì Baguette",
            },
            {
              id: "cdc13",
              name: "Bánh mì mặn",
              title: "Bánh mì mặn",
            },
            {
              id: "cdc14",
              name: "Bánh mì ngọt",
              title: "Bánh mì ngọt",
            }
          ]
        },
        {
          id: "cd4",
          name: "Bánh tráng miệng",
          title: "Bánh tráng miệng",
          chil: [
            {
              id: "cdc15",
              name: "Bánh miếng",
              title: "Bánh miếng",
            },
            {
              id: "cdc16",
              name: "Bánh mousse",
              title: "Bánh mousse",
            },
            {
              id: "cdc17",
              name: "Tiramisu/ Caramel/ Sữa chua",
              title: "Tiramisu/ Caramel/ Sữa chua",
            },
            {
              id: "cdc18",
              name: "Panna cotta & Pudding",
              title: "Panna cotta & Pudding",
            }
          ]
        },
        {
          id: "cd5",
          name: "Bánh khô",
          title: "Bánh khô",
          chil: [
            {
              id: "cdc19",
              name: "Bánh quy",
              title: "Bánh quy",
            },
            {
              id: "cdc20",
              name: "Bánh mì nướng",
              title: "Bánh nướng",
            },
            {
              id: "cdc21",
              name: "Bánh sừng bò mini",
              title: "Bánh sừng bò mini",
            }
          ]
        },
        {
          id: "cd6",
          name: "Bánh đông lạnh",
          title: "Bánh đông lạnh",
          chil: [
            {
              id: "cdc22",
              name: "Bánh bao",
              title: "Bánh bao",
            },
            {
              id: "cdc23",
              name: "Pizza",
              title: "Pizza",
            }
          ]
        },
        {
          id: "cd7",
          name: "Bánh theo mùa",
          title: "Bánh theo mùa",
          chil: [
            {
              id: "cdc24",
              name: "Bánh quy Tết",
              title: "Bánh quy Tết",
            },
            {
              id: "cdc25",
              name: "Bánh trung thu",
              title: "Bánh trung thu",
            },
            {
              id: "cdc26",
              name: "Bánh quy Noel",
              title: "Bánh quy Noel",
            },
            {
              id: "cdc27",
              name: "Bánh kem Noel",
              title: "Bánh kem Noel",
            }
          ]
        },
        {
          id: "cd8",
          name: "Đồ uống",
          title: "Đồ uống",
        }
      ]
    },
    {
      id: 4,
      name: "Tin tức",
      title: "Tin tức",
    },
    {
      id: 5,
      name: "Liên hệ",
      title: "Liên hệ",
    },
    {
      id: 6,
      name: "Hệ thống cửa hàng",
      title: "Hệ thống cửa hàng",
    },
    {
      id: 7,
      name: "Câu hỏi thường gặp",
      title: "Câu hỏi thường gặp",
    }
    // Add more data items as needed
  ];
  const menuFooter = [
    {
      id: 6,
      name: "CHÍNH SÁCH",
      children: [
        {
          id: "mf1",
          name: "Chính sách thành viên",
          title: "Chính sách thành viên",
          url: ""
        },
        {
          id: "mf2",
          name: "Chính sách thanh toán",
          title: "Chính sách thanh toán",
          url: ""
        },
        {
          id: "mf3",
          name: "Hướng dẫn mua hàng",
          title: "Hướng dẫn mua hàng",
          url: ""
        },
        {
          id: "mf4",
          name: "Quà tặng tri ân",
          title: "Quà tặng tri ân",
          url: ""
        },
        {
          id: "mf5",
          name: "Bảo mật thông tin cá nhân",
          title: "Bảo mật thông tin cá nhân",
          url: ""
        }
      ]
    }
  ]
  const template = [
    {
      id: "t1",
      name: "Bánh tươi mỗi ngày",
      sortDescribe: "Giảm đến 20% khi mua hàng qua web",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1694745247263"
    },
    {
      id: "t2",
      name: "Bánh tươi mỗi ngày",
      sortDescribe: "Giảm đến 20% khi mua hàng qua web",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_2.jpg?1694745247263"
    }
  ];
  const chinhSach = [
    {
      id: "c1",
      name: "Miễn phí vận chuyển",
      title: "Miễn phí vận chuyển",
      sortDescribe: "Áp dụng free ship cho tất cả đơn hàng từ 300 nghìn",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1694745247263",

    },
    {
      id: "c2",
      name: "Đổi trả dễ dàng",
      title: "Đổi trả dễ dàng",
      sortDescribe: "Đổi ngay trong ngày nếu như bánh không đúng yêu cầu",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_2.png?1694745247263",
    },
    {
      id: "c3",
      name: "Hỗ trợ nhanh chóng",
      title: "Hỗ trợ nhanh chóng",
      sortDescribe: "Gọi Hotline:190056750 để được hỗ trợ ngay",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_3.png?1694745247263",
    },
    {
      id: "c4",
      name: "Thanh toán đa dạng",
      title: "Thanh toán đa dạng",
      sortDescribe: "Thanh toán khi nhận hàng,Napas,Visa,Chuyển khoản",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_4.png?1694745247263",
    }
  ];
  const danhMuc = [
    {
      id: "d1",
      name: "Bánh kếp",
      title: "Bánh kếp",
      sortDescribe: "Xem ngay",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_1.jpg?1694745247263"
    },
    {
      id: "d2",
      name: "Bánh su kem",
      title: "Bánh su kem",
      sortDescribe: "Xem ngay",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_2.jpg?1694745247263"
    },
    {
      id: "d3",
      name: "Bánh mì nướng",
      title: "Bánh mì nướng",
      sortDescribe: "Xem ngay",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_3.jpg?1694745247263"
    },
    {
      id: "d4",
      name: "Bánh khác",
      title: "Bánh khác",
      sortDescribe: "Xem ngay",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_4.jpg?1694745247263"
    },
  ]
  const sale = [
    {
      id: "s1",
      name: "Bánh đang giảm giá",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      sortDescribe: "Chương trình đã kết thúc,hẹn gặp lại trong thời gian sớm nhất",
      children: [
        {
          id: "sc1",
          name: "Bánh sừng bò mini",
          title: "Bánh sừng bò mini",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/26-52b2528f0cb542bbbcb7810df8e62.jpg?v=1692095091097",
          url: ""
        },
        {
          id: "sc2",
          name: "Bánh Donut Socola Trắng",
          title: "Bánh Donut Socola Trắng",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-5-0619631ba.jpg?v=1692094227680",
          url: ""
        },
        {
          id: "sc3",
          name: "Bánh Mì Nướng Caramen",
          title: "Bánh Mì Nướng Caramen",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-862efa1275f7462c9e2680575e45da.jpg?v=1692094997170",
          url: ""
        },
        {
          id: "sc4",
          name: "Bánh Hoàng Kim",
          title: "Bánh Hoàng Kim",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087",
          url: ""
        },
        {
          id: "sc5",
          name: "Bánh quy bơ mứt dâu",
          title: "Bánh quy bơ mứt dâu",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-mut-dau-to-a0e6bb6421aa47bda.jpg?v=1692094744600",
          url: ""
        },
        {
          id: "sc6",
          name: "Caramen",
          title: "Caramen",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/caramel-d7c7ad0a5a654cac8f76208d.jpg?v=1692094359980",
          url: ""
        },
        {
          id: "sc7",
          name: "Mousse chanh leo",
          title: "Mousse chanh leo",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/54-472bcbe688e046dea6add446c0fe1.jpg?v=1692094268307",
          url: ""
        },
        {
          id: "sc8",
          name: "Bánh Opera 90G",
          title: "Bánh Opera 90G",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/27-5c9d407149054a0caab958d17fc7a.jpg?v=1692094146947",
          url: ""
        },
        {
          id: "sc9",
          name: "Bánh Gato Socola Sữa",
          title: "Bánh Gato Socola Sữa",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
          url: ""
        },
        {
          id: "sc10",
          name: "Bánh Donut Socola Dâu 45G",
          title: "Bánh Donut Socola Dâu 45G",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/20-f815cca7a6314f428132e9c6b0472.jpg?v=1692092825777",
          url: ""
        },
      ]
    }
  ]
  const top = [
    {
      id: "tp1",
      name: "Được mua nhiều nhất",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      // sortDescribe: "Chương trình đã kết thúc,hẹn gặp lại trong thời gian sớm nhất",
      children: [
        {
          id: "tpc1",
          name: "Bánh sừng bò mini",
          title: "Bánh sừng bò mini",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/26-52b2528f0cb542bbbcb7810df8e62.jpg?v=1692095091097",
          url: ""
        },
        {
          id: "tpc2",
          name: "Bánh Donut Socola Trắng",
          title: "Bánh Donut Socola Trắng",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-5-0619631ba.jpg?v=1692094227680",
          url: ""
        },
        {
          id: "tpc3",
          name: "Bánh Mì Nướng Caramen",
          title: "Bánh Mì Nướng Caramen",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-862efa1275f7462c9e2680575e45da.jpg?v=1692094997170",
          url: ""
        },
        {
          id: "tpc4",
          name: "Bánh Hoàng Kim",
          title: "Bánh Hoàng Kim",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087",
          url: ""
        },
        {
          id: "tpc5",
          name: "Bánh quy bơ mứt dâu",
          title: "Bánh quy bơ mứt dâu",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-mut-dau-to-a0e6bb6421aa47bda.jpg?v=1692094744600",
          url: ""
        },
        {
          id: "tpc6",
          name: "Caramen",
          title: "Caramen",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/caramel-d7c7ad0a5a654cac8f76208d.jpg?v=1692094359980",
          url: ""
        },
        {
          id: "tpc7",
          name: "Mousse chanh leo",
          title: "Mousse chanh leo",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/54-472bcbe688e046dea6add446c0fe1.jpg?v=1692094268307",
          url: ""
        },
        {
          id: "tpc8",
          name: "Bánh Opera 90G",
          title: "Bánh Opera 90G",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/27-5c9d407149054a0caab958d17fc7a.jpg?v=1692094146947",
          url: ""
        },
        {
          id: "tpc9",
          name: "Bánh Gato Socola Sữa",
          title: "Bánh Gato Socola Sữa",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
          url: ""
        },
        {
          id: "tpc10",
          name: "Bánh Donut Socola Dâu 45G",
          title: "Bánh Donut Socola Dâu 45G",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
          url: ""
        },
      ]
    }
  ];
  const newBakery = [
    {
      id: "nb1",
      name: "Bánh mới nhất",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      // sortDescribe: "Chương trình đã kết thúc,hẹn gặp lại trong thời gian sớm nhất",
      children: [
        {
          id: "nbc1",
          name: "Bánh sừng bò mini",
          title: "Bánh sừng bò mini",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/26-52b2528f0cb542bbbcb7810df8e62.jpg?v=1692095091097",
          url: ""
        },
        {
          id: "nbc2",
          name: "Bánh Donut Socola Trắng",
          title: "Bánh Donut Socola Trắng",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-5-0619631ba.jpg?v=1692094227680",
          url: ""
        },
        {
          id: "nbc3",
          name: "Bánh Mì Nướng Caramen",
          title: "Bánh Mì Nướng Caramen",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-862efa1275f7462c9e2680575e45da.jpg?v=1692094997170",
          url: ""
        },
        {
          id: "nbc4",
          name: "Bánh Hoàng Kim",
          title: "Bánh Hoàng Kim",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087",
          url: ""
        },
        {
          id: "nbc5",
          name: "Bánh quy bơ mứt dâu",
          title: "Bánh quy bơ mứt dâu",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-mut-dau-to-a0e6bb6421aa47bda.jpg?v=1692094744600",
          url: ""
        },
        {
          id: "nbc6",
          name: "Caramen",
          title: "Caramen",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/caramel-d7c7ad0a5a654cac8f76208d.jpg?v=1692094359980",
          url: ""
        },
        {
          id: "nbc7",
          name: "Mousse chanh leo",
          title: "Mousse chanh leo",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/54-472bcbe688e046dea6add446c0fe1.jpg?v=1692094268307",
          url: ""
        },
        {
          id: "nbc8",
          name: "Bánh Opera 90G",
          title: "Bánh Opera 90G",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/27-5c9d407149054a0caab958d17fc7a.jpg?v=1692094146947",
          url: ""
        },
        {
          id: "nbc9",
          name: "Bánh Gato Socola Sữa",
          title: "Bánh Gato Socola Sữa",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
          url: ""
        },
        {
          id: "nbc10",
          name: "Bánh Donut Socola Dâu 45G",
          title: "Bánh Donut Socola Dâu 45G",
          price: "40.000",
          priceSale: "30.000",
          unit: "₫",
          image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
          url: ""
        },
      ]
    }
  ]
  const banner = [
    {
      id: "b1",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/banner.jpg?1694745247263",
      title: "Banner",
      url: ""
    },
  ]
  const banner2 = [
    {
      id: "bn1",
      name: "Bánh nướng & Sữa",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_1.jpg?1694745247263",
      sortDescribe: "Vị béo",
      title: "Banner",
      url: ""
    },
    {
      id: "bn2",
      name: "Bánh & Trà",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_2.jpg?1694745247263",
      sortDescribe: "Hương vị tươi",
      title: "Banner",
      url: ""
    },
  ]
  const allBakery = [
    {
      id: "ab1",
      name: "Tất cả bánh",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      children: [
        {
          id: "abc1",
          name: "Bánh kem",
          title: "Bánh kem",
          chil: [
            {
              id: "abcc1",
              name: "Bánh kem Macaron Delight",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820",
              title: "Bánh kem Macaron Delight",
              price: "380.000",
              unit: "₫",
            },
            {
              id: "abcc2",
              name: "Bánh kem Dreamy Lady",
              title: "Bánh kem Dreamy Lady",
              price: "380.000",
              unit: "₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-dreamy-lady-7754385160e.jpg?v=1692092024453",
            },
            {
              id: "abcc3",
              name: "Bánh kem Bánh Hoàng Kim",
              title: "Bánh kem Bánh Hoàng Kim",
              price: "380.000",
              priceSale: "400.000₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087"
            },
            {
              id: "abcc4",
              name: "Bánh kem Mousse Chocolate",
              title: "Bánh kem Mousse Chocolate",
              price: "380.000",
              unit: "₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-chua-co-ten-a480f34a8c8.jpg?v=1692091849157"
            },
            {
              id: "abcc5",
              name: "Bánh kem Sweet Heart 4",
              title: "Bánh kem Sweet Heart 4",
              price: "150.000",
              priceSale: "120.000₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-removebg-preview-1-ba51f7d4e.png?v=1692091666957"
            },
            {
              id: "abcc6",
              name: "Bánh kem Amazing Chocolate",
              title: "Bánh kem Amayzing Chocolate",
              price: "380.000",
              unit: "₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-amazing-chocolate-1-c.png?v=1692091472963"
            },
            {
              id: "abcc7",
              name: "Bánh kem Endless Love",
              title: "Bánh kem Endless Love",
              price: "380.000",
              unit: "₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/endless-love-c7027cf9711b4fde9b6.png?v=1692091413697"
            },
            {
              id: "abcc8",
              name: "Bánh kem Princess",
              title: "Bánh kem Princess",
              price: "380.000",
              unit: "₫",
              image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/princess-8-58d2fc00a1d24627a63e3.png?v=1692091370170"
            }
          ]
        },
        {
          id: "abc2",
          name: "Bánh mì",
          title: "Bánh mì",
        },
        {
          id: "abc3",
          name: "Bánh ngọt",
          title: "Bánh ngọt",
        },
        {
          id: "abc4",
          name: "Bánh tráng miệng",
          title: "Bánh tráng miệng",
        },
        {
          id: "abc5",
          name: "Bánh khô",
          title: "Bánh khô",
        },
      ]
    }
  ]
  const about = [
    {
      id: "a1",
      name: "Bánh Mousse Sữa Chua",
      title: "Bánh Mousse Sữa Chua",
      sortDescribe: "Những chiếc bánh mousse sữa chua béo thơm, mềm ngọt là món tráng miệng được nhiều người yêu thích trong những ngày oi bức.",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_2.jpg?1694745247263"
    },
    {
      id: "a2",
      name: "Bánh Dark Chocolate",
      title: "Bánh Dark Chocolate",
      sortDescribe: "Nếu bạn là tín đồ của Chocolate thì không thể bỏ qua loại bánh Dark Chocolate của Brodard. Không phải vị đắng nhè nhẹ, bánh đem lại cho người thưởng thức vị đắng đặc trưng nguyên thủy của socola mà chỉ cần thử một lần sẽ mê đắm ",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_1.jpg?1694745247263"
    }
  ]
  const tinTuc = [
    {
      id: "tt1",
      name: "Tin tức mới nhất",
      title: "Tin tức mới nhất",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      children: [
        {
          id: "ttc1",
          name: "Donut chỉ từ 8k tại Dola",
          title: "Donut chỉ từ 8k tại Dola",
          sortDescribe: "Nhắc đến bánh Donut, dân sành thưởng thức hẳn không còn xa lạ gì với món ăn vặt rất phổ biến ở nước phương Tây này.Dù có nguồn...",
          image: "https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353"
        },
        {
          id: "ttc2",
          name: "Croissant ngàn lớp - đa dạng cách thức",
          title: "Croissant ngân lớp - đa dạng cách thức",
          sortDescribe: "Những chiếc bánh sừng bò với hương bơ thơm béo đặc trưng lại còn đưa miệng với độ giòn xốp, dai dai từ `ngàn` lớp bánh. Nổi bật với hình...",
          image: "https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870"
        },
        {
          id: "ttc3",
          name: "Bánh Tart thơm ngậy không thể bỏ lỡ",
          title: "Bánh Tart thơm ngậy không thể bỏ lỡ",
          sortDescribe: "Tart trứng là loại bánh đường phố nổi tiếng ở Hong Kong được rất nhiều người yêu thích. Không những thế, trong bảng xếp hạng 50 loại món ăn ngon...",
          image: "https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913"
        },
        {
          id: "ttc4",
          name: "Bánh đông lạnh tiện lợi",
          title: "Bánh đông lạnh tiện lợi",
          sortDescribe: "Bánh đông lạnh đã dần trở thành một sản phẩm quen thuộc cho các Mẹ Đảm sau một thời gian giãn cách.Sở dĩ bánh đông lạnh được nhiều...",
          image: "https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303"
        },
        {
          id: "ttc5",
          name: "Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola",
          title: "Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola",
          sortDescribe: "Đối với những người có niềm đam mê với đồ ngọt thì chắc chắn bánh ngọt đã trở thành một phần không thể thiếu. Những chiếc bánh ngọt hớp hồn...",
          image: "https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540"
        },
        {
          id: "ttc6",
          name: "Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola",
          title: "Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola",
          sortDescribe: "Bánh quy khô là món ăn thơm ngon, bổ dưỡng, được nhiều người tiêu dùng ưa thích lựa chọn. Không giống những loại bánh khác, bánh quy đặc biệt với hương...",
          image: "https://bizweb.dktcdn.net/100/492/035/articles/banh-quy-kho-1-2fb1b85ae77d4ca49.png?v=1692241736700"
        }
      ]
    }
  ]
  const danhGia = [
    {
      id: "dg1",
      name: "Khách hàng nói gì",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      children: [
        {
          id: "dgc1",
          name: "Hoàng dung",
          jobPosition: "Nhân Viên Văn Phòng",
          sortDescribe: "Tất cả các loại bánh của Dola Bakery đều rất ngon, hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn nhiệt tình. Cảm ơn Dola Bakery đã mang lại cho tôi trải nghiệm tuyệt vời. Tôi sẽ luôn ủng hộ.",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1694745247263",
        },
        {
          id: "dgc2",
          name: "Hồng Liêm",
          jobPosition: "Thiết kế",
          sortDescribe: "Tất cả các loại bánh của Dola Bakery đều rất ngon, hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn nhiệt tình. Cảm ơn Dola Bakery đã mang lại cho tôi trải nghiệm tuyệt vời. Tôi sẽ luôn ủng hộ.",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_2.jpg?1694745247263",
        },
        {
          id: "dgc3",
          name: "Ngọc Tuyến",
          jobPosition: "Đầu bếp",
          sortDescribe: "Tất cả các loại bánh của Dola Bakery đều rất ngon, hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn nhiệt tình. Cảm ơn Dola Bakery đã mang lại cho tôi trải nghiệm tuyệt vời. Tôi sẽ luôn ủng hộ.",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_3.jpg?1694745247263",
        }
      ]
    }
  ]
  const mailchimp = [
    {
      id: "mc1",
      name: "Đăng ký nhận tin",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_mailchimp.jpg?1694745247263",
      sortDescribe: "Đăng ký ngay và được giảm giá 15% cho lần mua hàng đầu tiên và nhiều chương trình hấp dẫn dành cho bạn!"
    }
  ]
  const ig = [
    {
      id: "ig1",
      name: "Follow Instagram",
      sortDescribe: "@dola_bakery",
      children: [
        {
          id: "igc1",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1694745247263",
          title: "Instagram"
        },
        {
          id: "igc2",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_2.png?1694745247263",
          title: "Instagram"
        },
        {
          id: "igc3",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_3.png?1694745247263",
          title: "Instagram"
        },
        {
          id: "igc4",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_4.png?1694745247263",
          title: "Instagram"
        },
        {
          id: "igc5",
          image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_5.png?1694745247263",
          title: "Instagram"
        },
      ]
    }
  ]
  const videos = [
    {
      id: "video1",
      name: "Video",
      video: "https://www.dropbox.com/scl/fi/ge1e9mrmjfnfgqi9u8jpo/flour_-_49549-1080p.mp4?rlkey=svv3pywf7s9z8iervjzf2a8b2&raw=1",
      type: "video/mp4"
    }
  ]
  // const dataSite=[{chinhSach,data,danhMuc}]
  res.status(200).json({ site, chinhSach, data, menuFooter, template, danhMuc, sale, top, banner, newBakery, banner2, allBakery, about, tinTuc, danhGia, mailchimp, ig, videos });
}