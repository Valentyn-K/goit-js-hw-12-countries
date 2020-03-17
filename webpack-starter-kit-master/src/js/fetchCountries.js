import {dataLendthControl} from './dataLendthControl.js';
import {err} from './error.js';
import spiner from './spiner.js';
import refs from './refs.js';

export  function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2';
  spiner.show();
  fetch(baseUrl + `/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(countriesArray => {
      spiner.hide();
      dataLendthControl(countriesArray);
    })
    .catch(error => {
      spiner.hide();
      err();
      console.log('Something went wrong!', error);
    });
}
