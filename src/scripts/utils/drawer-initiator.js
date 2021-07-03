/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  // EVENT UNTUK MELAKUKAN OPEN BUTTON MOBILE
  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show-menu-mobile');
  },
  // EVENT UNTUK MELAKUKAN CLOSE BUTTON MOBILE
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show-menu-mobile');
  },
};

export default DrawerInitiator;
