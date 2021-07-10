/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable padded-blocks */
/* eslint-disable max-len */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
     I.amOnPage('/#/favorite');
});


Scenario('Liking Three Restaurants', async ({ I }) => {


     I.amOnPage('/');
     I.seeElement('.card-title a ');
     const firstRestoTitle = [];
     for (let i = 1; i <= 3; i++) {
          // eslint-disable-next-line no-trailing-spaces
          I.click(locate('.card-title a').at(i));

          I.seeElement('#likeButton');
          firstRestoTitle.push(I.grabTextFrom('.nama-resto'));

          I.click('#likeButton');

          I.amOnPage('/');


     }

     I.amOnPage('/#/favorite');
     const likedResto = await I.grabNumberOfVisibleElements('.card-title a');

     assert.strictEqual(firstRestoTitle.length, likedResto);
});