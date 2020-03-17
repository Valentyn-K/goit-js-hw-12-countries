import templateForSINGLECountry from '../templates/templateForSINGLECountry.hbs';
import refs from './refs.js';

export  function drawSingleCountry(countryArray) {
  const mappedCountry = countryArray
    .map(country => templateForSINGLECountry(country))
    .join('\n');

  return (refs.inputResultContainer.innerHTML = mappedCountry);
}
