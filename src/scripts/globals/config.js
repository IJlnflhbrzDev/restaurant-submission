/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
// this file configurasi REQUEST API => DICODING

const CONFIG = {
  KEY: 100196,
  BASE_URL: `https://restaurant-api.dicoding.dev/`,
  SMALL_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
  MEDIUM_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
  LARGE_IMAGE_URL: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: 'Restaurant Apps PWA',
  DATABASE_NAME: 'PwaRestV2-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
