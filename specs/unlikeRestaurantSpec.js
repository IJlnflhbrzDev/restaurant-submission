/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import LikeButtonInitiator from '../src/scripts/globals/like-btn-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/database';

const addLikeButtonContainer = () => {
     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A restaurant', () => {
     beforeEach(async () => {
          addLikeButtonContainer();
          await FavoriteRestaurantIdb.putResto({ id: 1 });
     });

     afterEach(async () => {
          await FavoriteRestaurantIdb.deleteResto(1);
     });

     it('should display unlike widget when the restaurant has been liked', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               restaurant: {
                    id: 1,
               },
          });

          expect(document.querySelector('[aria-label="unlike this restaurant"]'))
               .toBeTruthy();
     });

     it('should not display like widget when the restaurant has been liked', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               restaurant: {
                    id: 1,
               },
          });

          expect(document.querySelector('[aria-label="like this restaurant"]'))
               .toBeFalsy();
     });

     it('should be able to remove liked restaurant from the list', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               restaurant: {
                    id: 1,
               },
          });

          document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

          expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
     });

     it('should not throw error if the unliked restaurant is not in the list', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               restaurant: {
                    id: 1,
               },
          });

          // hapus dulu film dari daftar film yang disukai
          await FavoriteRestaurantIdb.deleteResto(1);

          // kemudian, simulasikan pengguna menekan widget batal menyukai film
          document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

          expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
     });
});