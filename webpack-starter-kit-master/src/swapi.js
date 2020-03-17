const baseUrl = 'https://swapi.co/api/';

fetch(baseUrl, { method: 'GET' })
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));

//   GET https://swapi.co/api/people/
fetch('https://swapi.co/api/planets/')
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));
