/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import CONFIG from '../../globals/config';

const restoTemplate = (resto) => {
  return `
     <article>
                    <div class="card">
                         <img src=${CONFIG.SMALL_IMAGE_URL(
                           resto.pictureId
                         )}  class="card-img" alt=${resto.name}>
                         <div class="card-lokasi">
                              <h3>Kota,${resto.city}</h3>
                         </div>
                         <div class="card-body">
                              <h4 class="card-rating">Rating ${
                                resto.rating
                              }</h4>
                              <h5 class="card-title"><a href="${`/#/detail/${resto.id}`}" aria-label="nama restoran click jika anda ingin melihat lebih detail ">${
    resto.name
  }</a></h5>
                              <p class="card-text">${resto.description}</p>
                              <a class="btn_detail" href="${`/#/detail/${resto.id}`}" aria-label="click untuk melihat detail makanan">Detail</a>
                         </div>
                    </div>
     </article>

     `;
};

const RestoDetailTemplate = (resto) => {
  return `

     <article class="detail">
          <img src=${CONFIG.SMALL_IMAGE_URL(resto.pictureId)}
           class="detail-img"
           alt="Gambar ${resto.name}">

           <div class="detail-body">
               <h3 class="nama-resto">${resto.name}</h3>
               <h4>Rating <span>${resto.rating}</span></h4>
               <h5>Kota ${resto.city}</h5>

               <div class="adress">
                    <h6>Alamat Restaurant</h6>
                    <p>${resto.address}</p>
               </div>

               <div class="categories">
                    <h6>Kategori Restaurant</h6>
                    <p>${resto.categories
                      .map((item) => item.name)
                      .join(' - ')}</p>
               </div>

               <div class="menu-food">
                         <h6>Menu Makanan</h6>
                         <p>${resto.menus.foods
                           .map((item) => item.name)
                           .join(', ')}</p>
               </div>

               <div class="menu-drinks">
                         <h6>Menu Minuman</h6>
                         <p>${resto.menus.drinks
                           .map((item) => `<small>${item.name}</small>`)
                           .join(', ')}</p>
               </div>

               <div class="description">
                    <h6>Description</h6>
                    <p>${resto.description}</p>
               </div>

               <div class="customerReviews">
               <h6>Customer Reviews</h6>
                    ${resto.customerReviews.map((customer) => {
                      return `
                              <h6>${customer.name}</h6>
                              <small>${customer.review}</small>
                              <p>${customer.date}</p>
                         `;
                    })}
               </div>
           </div>
     </article>


     `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  restoTemplate,
  RestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
