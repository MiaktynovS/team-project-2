export function saveToLS(key, value) {
  // 1. Передаєш данні в функцію (назву коктейля для улюблених)
  // 2. Перевіряєш локал сторадж на наявність данних про улюблені коктейлі
  // 2.1 - ЯКЩО ТАМ Є УЛЮБЛЕНІ ВЖЕ, СТЯГУЄМ ДАННІ, ТА ДОДАЄМ НОВИЙ КОКТЕЙЛЬ, І ПОВЕРТАЄМО В ЛОКАЛСТОРАДЖ
  // 2.2 - ЯКЩО ТАМ НЕМАЄ НІЧОГО, СТВОРЮЄМО МАССИВ, ПУШИМ ТУДИ НАШ КОКТЕЙЛЬ, ВІДПРАВЛЯЄМ В ЛОКАЛСТОРАДЖ

  let dataInLocalStorage = localStorage.getItem(key);
  if (dataInLocalStorage === null) {
    let arrayOfFavorite = [];
    arrayOfFavorite.push(value);
    localStorage.setItem(key, JSON.stringify(arrayOfFavorite));
  } else {
    let arrayFromLocalStorage = JSON.parse(localStorage.getItem(key));
    arrayFromLocalStorage.push(value);
    localStorage.setItem(key, JSON.stringify(arrayFromLocalStorage));
  }
}
export function loadFromLS(key) {
  const item = localStorage.getItem(key);
  try {
    const parseItem = JSON.parse(item);
    return parseItem;
  } catch {
    return item;
  }
}
export function removeFromLS(key) {
  const item = localStorage.removeItem(key);
  try {
    const parseItem = JSON.parse(item);
    return parseItem;
  } catch {
    return item;
  }
}
