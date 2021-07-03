/* eslint-disable import/prefer-default-export */
import API_ENPOINT from '../globals/api-endpoint';

class DumyDicodingSource {
  static async GetRestauranList() {
    const response = await fetch(API_ENPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async GetDetailRestaurant(id) {
    const response = await fetch(API_ENPOINT.RESTAURANT_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DumyDicodingSource;
