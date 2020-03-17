import refs from './js/refs';
import debounce from 'lodash.debounce';
import { handleCountryInput } from './js/handleCountryInput.js';
import { handleCountryGetInfo } from './js/handleCountryGetInfo.js';

refs.input.addEventListener('input', debounce(handleCountryInput, 500));
refs.inputResultContainer.addEventListener('click', handleCountryGetInfo);
