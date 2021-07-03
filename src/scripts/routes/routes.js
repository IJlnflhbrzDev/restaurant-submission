/* eslint-disable no-unused-vars */

import daftarResto from '../views/pages/daftar-resto';
import detailResto from '../views/pages/detail-resto';
import favoriteResto from '../views/pages/favorite-resto';

const routes = {
  '/': daftarResto,
  '/daftar-restoran': daftarResto,
  '/favorite': favoriteResto,
  '/detail/:id': detailResto,
};

export default routes;
