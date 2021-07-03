/* eslint-disable no-useless-return */
// memanfaatkan runtime dari package serviceworker-webpack-plugin/lib/runtime untuk melakukan registerasinya.
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// Karena method register() berjalan secara asynchronous maka kita gunakan async/await.
const swRegister = async () => {
  // Melakukan Kondisi Untuk servicrWorker yg ada di Support Brouser atau tidak
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('SERVICE WORKER TIDAK DI SUPPORT OLEH BROUSER');
};

export default swRegister;
