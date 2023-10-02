//Здесь создаем функцию, которая будет получать информацию из API
import Recipe from "../model/Recipe";

const APP_ID = '6a959212';
const APP_KEY = 'ce6bb34f67bd4cc03132eac7e3c38273';

class RecipeRepository {
  async find(query) {
    const from = Math.floor(Math.random() * 100); // случайное число от 0 до 99

    const response = await fetch(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${encodeURI(query)}&from=${from}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}. Server is unavailable`);
    }

    const data = await response.json();

    //Проверяем, выдал ли сервер хоть какую-то информацию:
    if (Array.isArray(data.hits) && data.hits.length === 0) {
      // Если сервер вернул пустой массив, выводим сообщение с ошибкой:

      throw new Error(`Nothing found for "${query}". Try again`);
    }

    const result = [];

    data.hits.forEach(({recipe}) => {
      result.push(new Recipe(
        recipe.url,
        recipe.image,
        recipe.label,
        recipe.calories,
        recipe.cautions,
      ));
    });

    return result;
  }
}

export default RecipeRepository;
