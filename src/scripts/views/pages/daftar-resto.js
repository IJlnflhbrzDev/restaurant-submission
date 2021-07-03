/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import DumyDicodingSource from '../../data/dumy.-dicoding';
import { restoTemplate } from '../../views/templates/template-html';

const daftarResto = {
  async render() {
    return `
     <h2>DAFTAR <span>RESTAURANTS</span></h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await DumyDicodingSource.GetRestauranList();
    const restoranContainer = document.querySelector('.conten');
    restaurant.forEach((resto) => {
      restoranContainer.innerHTML += restoTemplate(resto);
    });
  },
};

export default daftarResto;
