const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

export async function fetchCocktails(query) {

 const response = await fetch(`${BASE_URL}s=${query}`);
  const data = await response.json();
  console.log(data);
  return data;
}

