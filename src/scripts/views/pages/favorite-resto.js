/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../../data/database';
import { restoTemplate } from '../templates/template-html';

const favoriteResto = {
  async render() {
    return `
           <h2 class="content__heading">You like Favorite Resto </h2>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    if (restaurants == '') {
      document.querySelector('.content__heading').innerHTML = 'Tidak Ada Restaurant yg kamu sukai ! ';
    }

    const restaurantContainer = document.querySelector('.conten');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += restoTemplate(restaurant);
    });
  },
};

export default favoriteResto;
