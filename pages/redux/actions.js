export function getSite() {
  return {
    type: 'GET_SITE',
  };
}
export function getMenu(dataSite) {
  return {
    type: 'GET_MENU',
    payload:dataSite,
  };
}
export function getBanner(dataSite) {
  return {
    type: 'GET_BANNER',
    payload:dataSite,
  };
}
export function getChinhSach(dataSite) {
  return {
    type: 'GET_CHINHSACH',
    payload:dataSite,
  };
}
export function getBanhSale(dataSite) {
  return {
    type: 'GET_BANHSALE',
    payload:dataSite,
  };
}
export function getBanhHot(dataSite) {
  return {
    type: 'GET_BANHHOT',
    payload:dataSite,
  };
}
export function getBanhMoi(dataSite) {
  return {
    type: 'GET_BANHMOI',
    payload:dataSite,
  };
}
export function getAll(dataSite) {
  return {
    type: 'GET_ALL',
    payload:dataSite,
  };
}
export function getAbout(dataSite) {
  return {
    type: 'GET_ABOUT',
    payload:dataSite,
  };
}
export function getTinTuc(dataSite) {
  return {
    type: 'GET_TINTUC',
    payload:dataSite,
  };
}
export function getDanhGia(dataSite) {
  return {
    type: 'GET_DANHGIA',
    payload:dataSite,
  };
}
export function getIg(dataSite) {
  return {
    type: 'GET_IG',
    payload:dataSite,
  };
}
export function getBanner2(dataSite) {
  return {
    type: 'GET_BANNER2',
    payload:dataSite,
  };
}
export function getMail(dataSite) {
  return {
    type: 'GET_MAIL',
    payload:dataSite,
  };
}
export function searchAll(dataSite) {
  return {
    type: 'GET_SEARCHALL',
    payload:dataSite,
  };
}