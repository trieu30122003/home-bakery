import dataSite from "../api/menu";
const initialState = {
  site: null,
};
const banner2 = {
  firt: dataSite.category.filter((item) => item.id === 65),
  second: dataSite.category.filter((item) => item.id === 66),
};

export function siteReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SEARCHALL':
      return {
        ...state,
        search: dataSite.products,
      };
    case 'GET_SITE':
      return {
        ...state,
        site: dataSite.site[0],
        menuFooter: dataSite.menu.filter((item) => item.type === 2)
      };
    case 'GET_MENU':
      return {
        ...state,
        menu: dataSite.menu.filter((item) => item.type === 1),
      }
    case 'GET_BANNER':
      return {
        ...state,
        banner: dataSite.banner,
      }
    case 'GET_CHINHSACH':
      let chinhSachCopy = dataSite.category.filter((item) => item.id === 52);
      chinhSachCopy.forEach((about) => {
        dataSite.news.forEach((news) => {
          if (news.categoryId === about.id) {
            about.children.push(news);
          }
        });
      });
      return {
        ...state,
        chinhSach: chinhSachCopy,
      }
    case 'GET_BANHSALE':
      return {
        ...state,
        productSale: dataSite.products.filter((item) => item.priceSale !== ""),
      }
    case 'GET_BANHHOT':
      return {
        ...state,
        productHot: dataSite.products.sort((a, b) => b.purchase - a.purchase).slice(0, 10),
      }
    case 'GET_BANHMOI':
      return {
        ...state,
        productNew: dataSite.products.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10),
      }
    case 'GET_ALL':
      let categoryCopy = dataSite.category.filter((item) => item.id === 53);
      categoryCopy.forEach((category) => {
        category.children.forEach((childCategory) => {
          if (!childCategory.children) {
            childCategory.children = [];
          }
          dataSite.products.forEach((product) => {
            if (product.categoryId === childCategory.id) {
              childCategory.children.push(product);
            }
          });
        });
      });
        return {
          ...state,
          allBakery: categoryCopy,
        }
    case 'GET_ABOUT':
      let aboutCopy = dataSite.category.filter((item) => item.id === 59);
      aboutCopy.forEach((about) => {
        dataSite.news.forEach((news) => {
          if (news.categoryId === about.id) {
            about.children.push(news);
          }
        });
      });
      return {
        ...state,
        about: aboutCopy,
      }
    case 'GET_TINTUC':
      let tinTucCopy = dataSite.category.filter((item) => item.id === 60);
      tinTucCopy.forEach((about) => {
        dataSite.news.forEach((news) => {
          if (news.categoryId === about.id) {
            about.children.push(news);
          }
        });
      });
      return {
        ...state,
        tinTuc: tinTucCopy,
      }
    case 'GET_DANHGIA':
      let danhGiaCopy = dataSite.category.filter((item) => item.id === 61);
      danhGiaCopy.forEach((about) => {
        dataSite.news.forEach((news) => {
          if (news.categoryId === about.id) {
            about.children.push(news);
          }
        });
      });
      return {
        ...state,
        danhGia: danhGiaCopy,
      }
    case 'GET_MAIL':
      let mailCopy = dataSite.category.filter((item) => item.id === 62);
      mailCopy.forEach((about) => {
        dataSite.news.forEach((news) => {
          if (news.categoryId === about.id) {
            about.children.push(news);
          }
        });
      });
      return {
        ...state,
        mail: mailCopy,
      }
    case 'GET_IG':
      let igCopy = dataSite.category.filter((item) => item.id === 63);
      igCopy.forEach((about) => {
        dataSite.news.forEach((news) => {
          if (news.categoryId === about.id) {
            about.children.push(news);
          }
        });
      });
      return {
        ...state,
        ig: igCopy,
      }
    case 'GET_BANNER2':
      return {
        ...state,
        banner2: banner2,
      }
    default:
      return state;
  }
}