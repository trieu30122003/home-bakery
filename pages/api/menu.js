const dataSite = {
  site: [
    {
      id: 30,
      name: "Dola Bakery",
      title: "Dola Bakery",
      address: "70 Lữ Gia, Phường 15, Quận 11, TP.HCM",
      phone: "1900 6750",
      email: "support@sapo.vn",
      logo: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/logo.png?1694745247263",
      icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/favicon.png?1694745247263",
      sortDescribe: "Hãy đến với Dola Bakery và hãy để những món bánh tuyệt vời của chúng tôi làm cho cuộc sống bạn thêm ngọt ngào",
      payments: [
        {
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_1.png?1694745247263",
        },
        {
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_2.png?1694745247263",
        },
        {
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_3.png?1694745247263",
        },
      ],
      connect: [
        {
          name: "Shopee",
          title: "Shopee",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1694745247263",
        },
        {
          name: "Shopee",
          title: "Shopee",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1694745247263",
        },
        {
          name: "Shopee",
          title: "Shopee",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1694745247263",
        },
        {
          name: "Shopee",
          title: "Shopee",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1694745247263",
        }
      ],
      social: [
        {
          name: "Facebook",
          title: "Facebook",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263",
        },
        {
          name: "Facebook",
          title: "Facebook",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263",
        },
        {
          name: "Facebook",
          title: "Facebook",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263",
        },
        {
          name: "Facebook",
          title: "Facebook",
          icon: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1694745247263",
        }
      ],
      // support: "MUA ONLINE (08:00 - 21:00 mỗi ngày) 19006750 Tất cả các ngày trong tuần (Trừ tết Âm Lịch) GÓP Ý & KHIẾU NẠI (08:30 - 20:30) 19006750 Tất cả các ngày trong tuần (Trừ tết Âm Lịch)"
    }
  ],
  menu: [
    {
      id: 1,
      siteId: 30,
      type: 1,
      name: "MenuHeader",
      url: "",
      parentId: 0,
      children: [
        {
          id: 2,
          parentId: 1,
          name: "Trang chủ",
          url: "",
          children: [],

        },
        {
          id: 3,
          parentId: 1,
          name: "Giới thiệu",
          children: [],
          url: ""
        },
        {
          id: 4,
          name: "Sản phẩm",
          parentId: 1,
          url: "",
          children: [
            {
              id: 5,
              parentId: 4,
              name: "Bánh kem",
              title: "Bánh kem",
              url: "",
              chil: [
                {
                  id: 6,
                  parentId: 5,
                  name: "Bánh sinh nhật",
                  title: "Bánh sinh nhật",
                  children: [],
                  url: ""
                },
                {
                  id: 7,
                  parentId: 5,
                  name: "Bánh sự kiện",
                  title: "Bánh sự kiện",
                  children: [],
                  url: ""
                },
                {
                  id: 8,
                  parentId: 5,
                  name: "Bánh cho trẻ em",
                  title: "Bánh cho trẻ em",
                  children: [],
                  url: ""
                },
                {
                  id: 9,
                  parentId: 5,
                  name: "Bánh kem đặt trước",
                  title: "Bánh kem đặt trước",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 10,
              parentId: 4,
              name: "Bánh ngọt",
              title: "Bánh ngọt",
              url: "",
              chil: [
                {
                  id: 11,
                  parentId: 10,
                  name: "Bánh bông lan",
                  title: "Bánh bông lan",
                  children: [],
                  url: ""
                },
                {
                  id: 12,
                  parentId: 10,
                  name: "Bánh Chiffon",
                  title: "Bánh Chiffon",
                  children: [],
                  url: ""
                },
                {
                  id: 13,
                  parentId: 10,
                  name: "Bánh cuộn",
                  title: "Bánh cuộn",
                  children: [],
                  url: ""
                },
                {
                  id: 14,
                  parentId: 10,
                  name: "Bánh su kem",
                  title: "Bánh su kem",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 15,
              parentId: 4,
              name: "Bánh mì",
              title: "Bánh mì",
              url: "",
              chil: [
                {
                  id: 16,
                  parentId: 15,
                  name: "Bánh mì kẹp",
                  title: "Bánh mẹ kẹp",
                  children: [],
                  url: ""
                },
                {
                  id: 17,
                  parentId: 15,
                  name: "Bánh mì gối",
                  title: "Bánh mì gối",
                  children: [],
                  url: ""
                },
                {
                  id: 18,
                  parentId: 15,
                  name: "Bánh cán lớp",
                  title: "Bánh cán lớp",
                  children: [],
                  url: ""
                },
                {
                  id: 19,
                  parentId: 15,
                  name: "Bánh mì Baguette",
                  title: "Bánh mì Baguette",
                  children: [],
                  url: ""
                },
                {
                  id: 20,
                  parentId: 15,
                  name: "Bánh mì mặn",
                  title: "Bánh mì mặn",
                  children: [],
                  url: ""
                },
                {
                  id: 21,
                  parentId: 15,
                  name: "Bánh mì ngọt",
                  title: "Bánh mì ngọt",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 22,
              parentId: 4,
              name: "Bánh tráng miệng",
              title: "Bánh tráng miệng",
              url: "",
              chil: [
                {
                  id: 23,
                  parentId: 22,
                  name: "Bánh miếng",
                  title: "Bánh miếng",
                  children: [],
                  url: ""
                },
                {
                  id: 24,
                  parentId: 22,
                  name: "Bánh mousse",
                  title: "Bánh mousse",
                  children: [],
                  url: ""
                },
                {
                  id: 25,
                  parentId: 22,
                  name: "Tiramisu/ Caramel/ Sữa chua",
                  title: "Tiramisu/ Caramel/ Sữa chua",
                  children: [],
                  url: ""
                },
                {
                  id: 26,
                  parentId: 22,
                  name: "Panna cotta & Pudding",
                  title: "Panna cotta & Pudding",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 27,
              parentId: 4,
              name: "Bánh khô",
              title: "Bánh khô",
              url: "",
              chil: [
                {
                  id: 28,
                  parentId: 27,
                  name: "Bánh quy",
                  title: "Bánh quy",
                  children: [],
                  url: ""
                },
                {
                  id: 29,
                  parentId: 27,
                  name: "Bánh mì nướng",
                  title: "Bánh nướng",
                  children: [],
                  url: ""
                },
                {
                  id: 30,
                  parentId: 27,
                  name: "Bánh sừng bò mini",
                  title: "Bánh sừng bò mini",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 31,
              parentId: 4,
              name: "Bánh đông lạnh",
              title: "Bánh đông lạnh",
              url: "",
              chil: [
                {
                  id: 32,
                  parentId: 31,
                  name: "Bánh bao",
                  title: "Bánh bao",
                  children: [],
                  url: ""
                },
                {
                  id: 33,
                  parentId: 31,
                  name: "Pizza",
                  title: "Pizza",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 34,
              parentId: 4,
              name: "Bánh theo mùa",
              title: "Bánh theo mùa",
              url: "",
              chil: [
                {
                  id: 35,
                  parentId: 34,
                  name: "Bánh quy Tết",
                  title: "Bánh quy Tết",
                  children: [],
                  url: ""
                },
                {
                  id: 36,
                  parentId: 34,
                  name: "Bánh trung thu",
                  title: "Bánh trung thu",
                  children: [],
                  url: ""
                },
                {
                  id: 37,
                  parentId: 34,
                  name: "Bánh quy Noel",
                  title: "Bánh quy Noel",
                  children: [],
                  url: ""
                },
                {
                  id: 38,
                  parentId: 34,
                  name: "Bánh kem Noel",
                  title: "Bánh kem Noel",
                  children: [],
                  url: ""
                }
              ]
            },
            {
              id: 39,
              parentId: 4,
              name: "Đồ uống",
              title: "Đồ uống",
              children: [],
              url: ""
            }
          ]
        },
        {
          id: 40,
          name: "Tin tức",
          parentId: 1,
          children: [],
          url: ""
        },
        {
          id: 41,
          name: "Liên hệ",
          parentId: 1,
          children: [],
          url: ""
        },
        {
          id: 42,
          name: "Hệ thống cửa hàng",
          parentId: 1,
          children: [],
          url: ""
        },
        {
          id: 43,
          name: "Câu hỏi thường gặp",
          parentId: 1,
          children: [],
          url: ""
        }
      ]
    },
    {
      id: 44,
      siteId: 30,
      type: 2,
      name: "Menufooter",
      url: "",
      children: [
        {
          id: 45,
          name: "Chính sách",
          parentId: 44,
          children: [
            {
              id: 46,
              parentId: 45,
              name: "Chính sách thành viên",
              children: [],
              url: ""
            },
            {
              id: 47,
              parentId: 45,
              name: "Chính sách thanh toán",
              children: [],
              url: ""
            },
            {
              id: 48,
              parentId: 45,
              name: "Hướng dẫn mua hàng",
              children: [],
              url: ""
            },
            {
              id: 49,
              parentId: 45,
              name: "Quà tặng tri ân",
              children: [],
              url: ""
            },
            {
              id: 50,
              parentId: 45,
              name: "Bảo mật thông tin cá nhân",
              children: [],
              url: ""
            },
          ]
        },
        {
          id: 51,
          name: "Hỗ trợ",
          parentId: 44,
          children: [
            {
              id: 52,
              parentId: 51,
              name: "MUA ONLINE (08:00 - 21:00 mỗi ngày)",
              phone: "19006750",
              children: [],
              sortDescribe: "Tất cả các ngày trong tuần (Trừ tết Âm Lịch)"
            },
            {
              id: 53,
              parentId: 51,
              name: "GÓP Ý & KHIẾU NẠI (08:30 - 20:30)",
              phone: "19006750",
              children: [],
              sortDescribe: "Tất cả các ngày trong tuần (Trừ tết Âm Lịch)"
            },
          ]
        }
      ]
    }
  ],
  category: [
    {
      id: 52,
      siteId: 30,
      name: "Chính sách",
      image: "",
      url: "",
      children: [],
    },
    {
      id: 53,
      siteId: 30,
      name: "Tất cả bánh",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      url: "",
      parentId: 0,
      children: [
        {
          id: 54,
          parentId: 53,
          name: "Bánh kem",
          image: "",
          children: [],
          url: "",

        },
        {
          id: 55,
          parentId: 53,
          name: "Bánh mì",
          image: "",
          children: [],
          url: "",

        },
        {
          id: 56,
          parentId: 53,
          name: "Bánh ngọt",
          image: "",
          children: [],
          url: "",

        },
        {
          id: 57,
          parentId: 53,
          name: "Bánh tráng miệng",
          image: "",
          children: [],
          url: "",
        },
        {
          id: 58,
          parentId: 53,
          name: "Bánh khô",
          image: "",
          children: [],
          url: "",
        },
      ]
    },

    {
      id: 59,
      siteId: 30,
      name: "About",
      image: "",
      url: "",
      children: [],
    },
    {
      id: 60,
      siteId: 30,
      name: "Tin tức mới nhất",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      url: "",
      children: [],
    },
    {
      id: 61,
      siteId: 30,
      name: "Khách hàng nói gì",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1694745247263",
      url: "",
      children: [],
    },
    {
      id: 62,
      siteId: 30,
      name: "mailchimp",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_mailchimp.jpg?1694745247263",
      url: "",
      children: [],
    },
    {
      id: 63,
      siteId: 30,
      name: "Follow Instagram",
      sortDescribe: "@dola_bakery",
      url: "",
      children: [],
    },
    {
      id: 64,
      siteId: 30,
      name: "video",
      children: [],
    },
    {
      id: 65,
      siteId: 30,
      name: "Bánh nướng & sữa",
      sortDescribe: "Vị béo",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_1.jpg?1694745247263",
      children: [],
    },
    {
      id: 66,
      siteId: 30,
      name: "Bánh & trà",
      sortDescribe: "Hương vị tươi",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_2.jpg?1694745247263",
      children: [],
    }
  ],
  products: [
    // bánh kem
    {
      id: 67,
      categoryId: 54,
      name: "Bánh kem Macaron Delight",
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820",
      title: "Bánh kem Macaron Delight",
      price: "380.000₫",
      priceSale: "",
      purchase: 1,
      date: "2022-11-01",
      url: ""
    },
    {
      id: 68,
      categoryId: 54,
      name: "Bánh kem Dreamy Lady",
      title: "Bánh kem Dreamy Lady",
      price: "380.000₫",
      // unit: "₫",
      priceSale: "",
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-dreamy-lady-7754385160e.jpg?v=1692092024453",
      purchase: 1,
      date: "2022-11-01",
      url: ""

    },
    {
      id: 69,
      categoryId: 54,
      name: "Bánh Hoàng Kim",
      title: "Bánh Hoàng Kim",
      price: "380.000₫",
      // unit: "₫",
      priceSale: "400.000₫",
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087",
      purchase: 1,
      date: "2022-11-01",
      url: ""

    },
    {
      id: 70,
      categoryId: 54,
      name: "Bánh kem Mousse Chocolate",
      title: "Bánh kem Mousse Chocolate",
      price: "380.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-chua-co-ten-a480f34a8c8.jpg?v=1692091849157",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 71,
      categoryId: 54,
      name: "Bánh kem Sweet Heart 4",
      title: "Bánh kem Sweet Heart 4",
      price: "150.000₫",
      // unit: "₫",
      priceSale: "120.000₫",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-removebg-preview-1-ba51f7d4e.png?v=1692091666957",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 72,
      categoryId: 54,
      name: "Bánh kem Amazing Chocolate",
      title: "Bánh kem Amayzing Chocolate",
      price: "380.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-amazing-chocolate-1-c.png?v=1692091472963",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 73,
      categoryId: 54,
      name: "Bánh kem Endless Love",
      title: "Bánh kem Endless Love",
      price: "380.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/endless-love-c7027cf9711b4fde9b6.png?v=1692091413697",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 74,
      categoryId: 54,
      name: "Bánh kem Princess",
      title: "Bánh kem Princess",
      price: "380.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/princess-8-58d2fc00a1d24627a63e3.png?v=1692091370170",
      date: "2022-11-01",
      url: ""
    },
    //bánh mì
    {
      id: 75,
      categoryId: 55,
      name: "Bánh Mì Nhân Sen Sữa Dừa",
      title: "Bánh Mì Nhân Sen Sữa Dừa",
      price: "10.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sen-sua-dua-ac9cc58a8ba545aaa03c.jpg?v=1692092922617",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 76,
      categoryId: 55,
      name: "Bánh Mì Hạt Óc Chó Sốt Kem",
      title: "Bánh Mì Hạt Óc Chó Sốt Kem",
      price: "30.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-22-a231cf82.jpg?v=1692092861340",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 77,
      categoryId: 55,
      name: "Bánh Danish Nho",
      title: "Bánh Danish Nho",
      price: "20.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/3-6b69cb608b84410b9ab355bc0267c2.jpg?v=1692092640000",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 78,
      categoryId: 55,
      name: "Bánh Donut Socola Dâu 45G",
      title: "Bánh Donut Socola Dâu 45G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "20.000₫",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/20-f815cca7a6314f428132e9c6b0472.jpg?v=1692092825777",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 79,
      categoryId: 55,
      name: "Bánh Donut Socola Trắng Hạnh Nhân 45G",
      title: "Bánh Donut Socola Trắng Hạnh Nhân 45G",
      price: "10.000₫",
      // unit: "₫",
      priceSale: "20.000₫",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sen-sua-dua-ac9cc58a8ba545aaa03c.jpg?v=1692092922617",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 80,
      categoryId: 55,
      name: "Bánh Donut Socola Trà Xanh 45G",
      title: "Bánh Donut Socola Trà Xanh 45G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sen-sua-dua-ac9cc58a8ba545aaa03c.jpg?v=1692092922617",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 81,
      categoryId: 55,
      name: "Bánh Mì Xúc Xích Ruốc",
      title: "Bánh Mì Xúc Xích Ruốc",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-18-5dc8fb8e.jpg?v=1692092726203",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 82,
      categoryId: 55,
      name: "Bánh Mì Nhân Sợi Gà Sốt Teriyaki",
      title: "Bánh Mì Nhân Sợi Gà Sốt Teriyaki",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-tuoi-soi-ga-sot-teriyaki-1.jpg?v=1692092695367",
      date: "2022-11-01",
      url: ""
    },
    //bánh ngọt
    {
      id: 83,
      categoryId: 56,
      name: "Bánh Su Kem Nhân Vani",
      title: "Bánh Su Kem Nhân Vani",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/49-2f4173248ab5495babe1c9ddc804c.jpg?v=1692093856747",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 84,
      categoryId: 56,
      name: "Bánh Su Kem Nhân Socola",
      title: "Bánh Su Kem Nhân Socola",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/48-ba0acd283d9944f5bfa21d4026b29.jpg?v=1692093815550",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 85,
      categoryId: 56,
      name: "Bánh Muffin Socola Chip",
      title: "Bánh Muffin Socola Chip",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/17-0bab5559a3714b46b407517296419.jpg?v=1692093767223",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 86,
      categoryId: 56,
      name: "Bánh Gato Socola Sữa",
      title: "Bánh Gato Socola Sữa",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 87,
      categoryId: 56,
      name: "Bánh Cuộn Socola Miếng",
      title: "Bánh Cuộn Socola Miếng",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/83-5760a68327794f8c9675f73336293-min-1.jpg?v=1692093694480",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 88,
      categoryId: 56,
      name: "Bánh Cuộn Vani 110G",
      title: "Bánh Cuộn Vani 110G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/42-f9db27ab52dc45ddb159636c43e27.jpg?v=1692093486117",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 89,
      categoryId: 56,
      name: "Bánh Cuộn Trà Xanh 110G",
      title: "Bánh Cuộn Trà Xanh 110G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/43-38af50a70488465286ce3ff0040db.jpg?v=1692093451703",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 90,
      categoryId: 56,
      name: "Bánh Chiffon Vani",
      title: "Bánh Chiffon Vani",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/41-c43fc976b5554ed9a89c65d6f22db.jpg?v=1692093413140",
      date: "2023-11-01",
      url: ""
    },
    //bánh tráng miệng
    {
      id: 91,
      categoryId: 57,
      name: "Bánh Pana Cotta",
      title: "Bánh Pana Cotta",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/panna-cotta-3459143e9ffa4e01bcfe.jpg?v=1692094440360",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 92,
      categoryId: 57,
      name: "Sữa chua",
      title: "Sữa chua",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sua-chua-59d14133b74f49979da0edf.jpg?v=1692094394980",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 93,
      categoryId: 57,
      name: "Caramen",
      title: "Caramen",
      price: "13.000₫",
      // unit: "₫",
      priceSale: "15.000₫",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/caramel-d7c7ad0a5a654cac8f76208d.jpg?v=1692094359980",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 94,
      categoryId: 57,
      name: "Mousse Trà Xanh",
      title: "Mousse Trà Xanh",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-31-6c5684fa.jpg?v=1692094319223",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 95,
      categoryId: 57,
      name: "Mousse Chanh Leo",
      title: "Mousse Chanh Leo",
      price: "30.000₫",
      // unit: "₫",
      priceSale: "39.000₫",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/54-472bcbe688e046dea6add446c0fe1.jpg?v=1692094268307",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 96,
      categoryId: 57,
      name: "Bánh Red Velvet 90G",
      title: "Bánh Red Velvet 90G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 100,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-5-0619631ba.jpg?v=1692094227680",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 97,
      categoryId: 57,
      name: "Bánh Opera 90G",
      title: "Bánh Opera 90G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "39.000₫",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/27-5c9d407149054a0caab958d17fc7a.jpg?v=1692094146947",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 98,
      categoryId: 57,
      name: "Bánh Tiramisu 90G",
      title: "Bánh Tiramisu 90G",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/28-bd8429ed0aa94f4cb872f92dfa4b9.jpg?v=1692094191763",
      date: "2022-11-01",
      url: ""
    },
    //Bánh khô
    {
      id: 99,
      categoryId: 58,
      name: "Bánh Sừng Bò Mini",
      title: "Bánh Sừng Bò Mini",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/26-52b2528f0cb542bbbcb7810df8e62.jpg?v=1692095091097",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 100,
      categoryId: 58,
      name: "Bánh Mì Nướng Phô Mai Que",
      title: "Bánh Mì Nướng Phô Mai Que",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/3-fdd1265100174cc3a112fde516b520.jpg?v=1692095046793",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 101,
      categoryId: 58,
      name: "Bánh Mì Nướng Caramen",
      title: "Bánh Mì Nướng Caramen",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-862efa1275f7462c9e2680575e45da.jpg?v=1692094997170",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 102,
      categoryId: 58,
      name: "Bánh Mì Nướng Bơ Tỏi",
      title: "Bánh Mì Nướng Bơ Tỏi",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/9-1cc15e71b97d405bbef69f4c166c44.jpg?v=1692094932597",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 103,
      categoryId: 58,
      name: "Bánh Quy Dừa",
      title: "Bánh Quy Dừa",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-dua-to-nho-9719c816ba7247699.jpg?v=1692094860540",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 104,
      categoryId: 58,
      name: "Bánh Quy Hạnh Nhân",
      title: "Bánh Quy Hạnh Nhân",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-hanh-nhan-d1ba3f7c70fb43d0b1.jpg?v=1692094804490",
      date: "2022-11-01",
      url: ""
    },
    {
      id: 105,
      categoryId: 58,
      name: "Bánh Quy Bơ Mứt Dâu",
      title: "Bánh Quy Bơ Mứt Dâu",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "39.000₫",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-mut-dau-to-a0e6bb6421aa47bda.jpg?v=1692094744600",
      date: "2023-11-01",
      url: ""
    },
    {
      id: 106,
      categoryId: 58,
      name: "Bánh Lady Finger",
      title: "Bánh Lady Finger",
      price: "15.000₫",
      // unit: "₫",
      priceSale: "",
      purchase: 1,
      image: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/lady-finger-6bd9609cce084948a182.jpg?v=1692094694990",
      date: "2022-11-01",
      url: ""
    },
  ],
  news: [
    //chính sách
    {
      id: 107,
      categoryId: 52,
      name: "Miễn phí vận chuyển",
      title: "Miễn phí vận chuyển",
      sortDescribe: "Áp dụng free ship cho tất cả đơn hàng từ 300 nghìn",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1694745247263",
      url: ""
    },
    {
      id: 108,
      categoryId: 52,
      name: "Đổi trả dễ dàng",
      title: "Đổi trả dễ dàng",
      sortDescribe: "Đổi ngay trong ngày nếu như bánh không đúng yêu cầu",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_2.png?1694745247263",
      url: ""
    },
    {
      id: 109,
      categoryId: 52,
      name: "Hỗ trợ nhanh chóng",
      title: "Hỗ trợ nhanh chóng",
      sortDescribe: "Gọi Hotline: 19006750 để được hỗ trợ ngay",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_3.png?1694745247263",
      url: ""
    },
    {
      id: 110,
      categoryId: 52,
      name: "Thanh toán đa dạng",
      title: "Thanh toán đa dạng",
      sortDescribe: "Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1694745247263",
      url: ""
    },
    //about
    {
      id: 111,
      categoryId: 59,
      name: "Bánh Mousse Sữa Chua",
      title: "Bánh Mousse Sữa Chua",
      sortDescribe: "Những chiếc bánh mousse sữa chua béo thơm, mềm ngọt là món tráng miệng được nhiều người yêu thích trong những ngày oi bức.",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_2.jpg?1694745247263",
      url: ""
    },
    {
      id: 112,
      categoryId: 59,
      name: "Bánh Dark Chocolate",
      title: "Bánh Dark Chocolate",
      sortDescribe: "Nếu bạn là tín đồ của chocolate thì không thể bỏ qua loại bánh Dark Chocolate của Brodard. Không phải là vị đắng nhè nhẹ, bánh đem lại cho người thưởng thức vị đắng đặc trưng nguyên thủy của socola mà chỉ cần thử một lần là sẽ mê đắm.",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_1.jpg?1694745247263",
      url: ""
    },
    //tin tức mới nhất
    {
      id: 113,
      categoryId: 60,
      name: "Donut chỉ từ 8k tại Dola",
      title: "Donut chỉ từ 8k tại Dola",
      sortDescribe: " Nhắc đến bánh Donut, dân sành thưởng thức hẳn không còn xa lạ gì với món ăn vặt rất phổ biến ở các nước phương Tây này. Dù có nguồn...",
      image: "https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353",
      url: ""
    },
    {
      id: 114,
      categoryId: 60,
      name: "Croissant ngàn lớp - đa dạng cách thưởng thức",
      title: "Croissant ngàn lớp - đa dạng cách thưởng thức",
      sortDescribe: " Những chiếc bánh sừng bò với hương bơ thơm béo đặc trưng lại còn đưa miệng với độ giòn xốp, dai dai từ ngàn lớp bánh. Nổi bật với hình...",
      image: "https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870",
      url: ""
    },
    {
      id: 115,
      categoryId: 60,
      name: "Bánh Tart thơm ngậy không thể bỏ lỡ",
      title: "Bánh Tart thơm ngậy không thể bỏ lỡ",
      sortDescribe: " Tart trứng là loại bánh đường phố nổi tiếng ở Hong Kong được rất nhiều người yêu thích. Không những thế, trong bảng xếp hạng 50 loại món ăn ngon...",
      image: "https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913",
      url: ""
    },
    {
      id: 116,
      categoryId: 60,
      name: "Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến",
      title: "Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến",
      sortDescribe: "Bánh đông lạnh đã dần trở thành một sản phẩm quen thuộc cho các Mẹ Đảm sau một thời gian dài giãn cách. Sở dĩ, bánh đông lạnh được nhiều...",
      image: "https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303",
      url: ""
    },
    {
      id: 117,
      categoryId: 60,
      name: "Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola",
      title: "Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola",
      sortDescribe: "Đối với những người có niềm đam mê với đồ ngọt thì chắc chắn bánh ngọt đã trở thành một phần không thể thiếu. Những chiếc bánh ngọt hớp hồn...",
      image: "https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540",
      url: ""
    },
    {
      id: 118,
      categoryId: 60,
      name: "Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola",
      title: "Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola",
      sortDescribe: "Bánh quy khô là món ăn thơm ngon, bổ dưỡng, được nhiều người tiêu dùng ưa thích lựa chọn. Không giống những loại bánh khác, bánh quy đặc biệt với hương...",
      image: "https://bizweb.dktcdn.net/100/492/035/articles/banh-quy-kho-1-2fb1b85ae77d4ca49.png?v=1692241736700",
      url: ""
    },
    //khách hàng nói gì
    {
      id: 119,
      categoryId: 61,
      name: "Hoàng Dung",
      position: "Nhân viên văn phòng",
      sortDescribe: "Tất cả các loại bánh của Dola Bakery đều rất ngon, hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn rất nhiệt tình. Cảm ơn Dola Bakery đã mang lại cho tôi trãi nghiệm tuyệt vời. Tôi sẽ luôn ủng hộ",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1694745247263",
      title: "",
      url: ""
    },
    {
      id: 120,
      categoryId: 61,
      name: "Hồng Liêm",
      position: "Thiết kế",
      sortDescribe: "Tất cả các loại bánh của Dola Bakery đều rất ngon, hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn rất nhiệt tình. Cảm ơn Dola Bakery đã mang lại cho tôi trãi nghiệm tuyệt vời. Tôi sẽ luôn ủng hộ",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1694745247263",
      title: "",
      url: ""
    },
    {
      id: 121,
      categoryId: 61,
      name: "Ngọc Tuyến",
      position: "Đầu bếp",
      sortDescribe: "Tất cả các loại bánh của Dola Bakery đều rất ngon, hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn rất nhiệt tình. Cảm ơn Dola Bakery đã mang lại cho tôi trãi nghiệm tuyệt vời. Tôi sẽ luôn ủng hộ",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1694745247263",
      title: "",
      url: ""
    },
    //mailchimp
    {
      id: 122,
      categoryId: 62,
      name: "Đăng kí nhận tin",
      sortDescribe: "Đăng ký ngay và được giảm giá 15% cho lần mua hàng đầu tiên và nhiều chương trình hấp dẫn dành cho bạn!",
      image: "",
      title: "",
      url: ""
    },
    //instagram
    {
      id: 123,
      categoryId: 62,
      name: "Follow Instagram",
      title: "follow",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1694745247263",
      url: ""
    },
    {
      id: 124,
      categoryId: 62,
      name: "Follow Instagram",
      title: "follow",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1694745247263",
      url: ""
    },
    {
      id: 125,
      categoryId: 62,
      name: "Follow Instagram",
      title: "follow",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1694745247263",
      url: ""
    },
    {
      id: 126,
      categoryId: 62,
      name: "Follow Instagram",
      title: "follow",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1694745247263",
      url: ""
    },
    {
      id: 127,
      categoryId: 62,
      name: "Follow Instagram",
      title: "follow",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1694745247263",
      url: ""
    },
    //video
    {
      id: 128,
      categoryId: "c12",
      video: "https://www.dropbox.com/scl/fi/ge1e9mrmjfnfgqi9u8jpo/flour_-_49549-1080p.mp4?rlkey=svv3pywf7s9z8iervjzf2a8b2&raw=1",
      title: "",
      url: ""
    }
  ],
  banner: [
    {
      id: 129,
      siteId: 30,
      name: "Bánh tươi mỗi ngày",
      sortDescribe: "Giảm đến 20% khi đặt hàng qua web",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_2.jpg?1694745247263"
    },
    {
      id: 130,
      siteId: 30,
      name: "Bánh tươi mỗi ngày",
      sortDescribe: "Giảm đến 20% khi đặt hàng qua web",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1694745247263"
    },
    {
      id: 131,
      siteId: 30,
      name: "banner1",
      sortDescribe: "",
      image: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/banner.jpg?1694745247263"
    }
  ]
}
export default dataSite;