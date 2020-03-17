import templateForLessThen10Countries from '../templates/templateForLessThen10Countries.hbs';
import refs from './refs.js';

export function drawLessThen10Countries(countriesArray) {
  const mappedData = countriesArray
    .map(country => templateForLessThen10Countries(country))
    .join('\n');
  refs.inputResultContainer.innerHTML = '';
  return refs.inputResultContainer.insertAdjacentHTML('beforeend', mappedData);
}
