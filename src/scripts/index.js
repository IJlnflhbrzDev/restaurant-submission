/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#nav-drawwer'),
  drawer: document.querySelector('#nav-drawwer_mobile'),
  content: document.querySelector('.conten'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

function showPage() {
  document.querySelector(".loader").style.display = "none";
}

window.addEventListener('load', () => {
  showPage();
});

