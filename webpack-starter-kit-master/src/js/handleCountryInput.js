import {fetchCountries} from './fetchCountries.js';
import refs from './refs.js';

export  function handleCountryInput(event) {
  refs.inputResultContainer.innerHTML = '';
  console.log(event.target.value);
  const searchQuery = event.target.value;
  if (searchQuery.length === 0) {
    return;
  }
  fetchCountries(searchQuery);
}

