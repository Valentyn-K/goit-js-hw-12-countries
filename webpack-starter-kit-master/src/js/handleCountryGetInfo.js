import {fetchCountries} from './fetchCountries.js';
import {drawSingleCountry} from './drawSingleCountry.js';
import refs from './refs.js';

export  function handleCountryGetInfo(event) {
  console.dir(event.target);
  const query = event.target.textContent;
  refs.input.value = query;
  fetchCountries(refs.input.value);
}
