// console.log(debounce);
import debounce from 'lodash.debounce';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
// console.dir(PNotifyStyleMaterial);
// import PNotify from 'node_modules/pnotify/dist/es/PNotify.js';
import templateForLessThen10Countries from './templates/templateForLessThen10Countries.hbs';
// console.log(templateForLessThen10Countries);



const refs = {
  input: document.querySelector('input'),
  inputResultContainer: document.querySelector('.input_result-container'),
  ul: document.querySelector('.countries-list'),
};
console.dir(refs.input);
console.dir(refs.inputResultContainer);

const baseUrl = 'https://restcountries.eu/rest/v2';

// function drawLessThen10Countries(data) {
//   //   const markup = templateForLessThen10Countries(data);
//   const mappedData = data
//     .map(dataItem => templateForLessThen10Countries(dataItem.name))
//     .join('\n');
//   //   console.log(markup);
//   return refs.inputResultContainer.insertAdjacentHTML('beforeend', mappedData);
// }

// function dataLendthControl(data) {
//   if (data.length === 1) {
//     console.log('1 country', data);
//   } else if (data.length > 1 && data.length <= 10) {
//     console.log('2-10 country', data);
//     drawLessThen10Countries(data);
//   } else {
//     console.log('Too many countries', data);
//   }
// }

// const getCountries = country => {
//   fetch(baseUrl + `/name/${country}`)
//     .then(response => {
//       //   console.log(response);
//       //   dataLendthControl(data);

//       return response.json();
//       //   console.log(response.json());
//     })
//     .then(data => {
//       //   console.log(data);
//       //   console.dir(data);
//       dataLendthControl(data);
//     });
// };

// function handleCountryInput(event) {
//   console.log(event.target.value);
//   const country = event.target.value;

//   getCountries(country);
// }

// refs.input.addEventListener('input', debounce(handleCountryInput, 500));

// getCountries('Uk');
