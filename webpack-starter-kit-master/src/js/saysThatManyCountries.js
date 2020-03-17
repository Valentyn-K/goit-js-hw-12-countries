import refs from './refs.js';
import PNotify_1 from 'pnotify/dist/es/PNotify';
export  function saysThatManyCountries() {
  refs.inputResultContainer.innerHTML = '';

  PNotify_1.error({
    text: 'To many matches found. Please enter a more specific query!',
  });
}
