import {drawSingleCountry} from './drawSINGLECountry.js';
import {drawLessThen10Countries} from './drawLessThen10Countries.js';
import {saysThatManyCountries} from './saysThatManyCountries.js';

export  function dataLendthControl(countriesArray) {
  if (countriesArray.length === 1) {
    console.log('1 country', countriesArray);
    drawSingleCountry(countriesArray);
  } else if (countriesArray.length > 1 && countriesArray.length <= 10) {
    console.log('2-10 country', countriesArray);
    drawLessThen10Countries(countriesArray);
  } else if (countriesArray.length > 10) {
    console.log('Too many countries', countriesArray);
    saysThatManyCountries();
  }
}
