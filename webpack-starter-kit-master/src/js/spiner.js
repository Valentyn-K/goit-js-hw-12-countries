import refs from './refs.js';

export default {
  show() {
    refs.loader.classList.remove('is-hidden');
  },

  hide() {
    refs.loader.classList.add('is-hidden');
  },
};
