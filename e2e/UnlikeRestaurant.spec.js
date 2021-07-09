/* eslint-disable no-alert */
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
// const assert = require('assert');

Feature('Unlike Restaurant');

Before(({ I }) => {
     I.amOnPage('/#/favorite');
});


Scenario('Liking One Restaurant', ({ I }) => {

     I.see('You like Favorite Resto', ' .content__heading');

     pause();
     I.amOnPage('/');
     I.seeElement('.card-title a ');


     // eslint-disable-next-line no-trailing-spaces
     I.click(locate('.card-title a'));

     I.seeElement('#likeButton');

     I.click('#likeButton');

     I.amOnPage('/#/favorite');


     I.seeElement('.card-title a');
     I.click('.card-title a');

     I.seeElement('#likeButton');
     I.click('#likeButton');

     I.amOnPage('/#/favorite');

});