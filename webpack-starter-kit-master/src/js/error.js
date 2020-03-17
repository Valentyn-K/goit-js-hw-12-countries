import refs from './refs.js';
import PNotify_1 from 'pnotify/dist/es/PNotify';
export  function err() {
  refs.inputResultContainer.innerHTML = '';

  PNotify_1.error({
    title: 'Error!',
    text: 'There are no such countries! Try another',
  });
}
