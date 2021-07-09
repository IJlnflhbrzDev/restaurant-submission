// /* eslint-disable no-await-in-loop */
// /* eslint-disable no-plusplus */
// /* eslint-disable padded-blocks */
// /* eslint-disable max-len */
// /* eslint-disable semi */
// /* eslint-disable no-multiple-empty-lines */
// /* eslint-disable eol-last */
// /* eslint-disable indent */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// // const assert = require('assert');

// Feature('Liking Restaurant');

// Before(({ I }) => {
//      I.amOnPage('/#/favorite');
// });


// Scenario('Liking One Restaurant', ({ I }) => {
//      I.see('You like Favorite Resto', ' .content__heading');


//      I.amOnPage('/');
//      pause();
//      I.seeElement('.card-title a ');

//      const titles = [];
//      for (let i = 1; i <= 3; i++) {
//           // eslint-disable-next-line no-trailing-spaces
//           I.click(locate('.card-title a').at(i));

//           I.seeElement('#likeButton');

//           I.click('#likeButton');
//           titles.push(I.grabTextFrom('.nama-resto'));

//           I.amOnPage('/');

//      }

//      I.amOnPage('/#/favorite');
//      I.seeElement('article');



// });