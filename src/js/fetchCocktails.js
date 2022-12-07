const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

export function fetchCocktails(query) {

 return fetch(`${BASE_URL}s=${query}`).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  return data;
});
}

