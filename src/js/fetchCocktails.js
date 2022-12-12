const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const RANDOM_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const INGREDIENT_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?';

export async function fetchCocktails(query) {
  const response = await fetch(`${BASE_URL}s=${query}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchLetterCocktails(letter) {
  const response = await fetch(`${BASE_URL}f=${letter}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchRandomCocktails() {
  const response = await fetch(`${RANDOM_URL}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchIngredientCocktails(ingredient) {
  console.log(ingredient);
  const response = await fetch(`${INGREDIENT_URL}i=${ingredient}`);
  const data = await response.json();
  console.log(data);
  return data;
}
