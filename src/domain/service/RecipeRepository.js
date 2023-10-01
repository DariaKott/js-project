//Здесь создаем функцию, которая будет получать информацию из API
import Recipe from "../model/Recipe";
import ErrorObj from "../model/Error";
import { ErrorMsg } from "../../presentation/components/ErrorMsg";

const APP_ID = '6a959212';
const APP_KEY = 'ce6bb34f67bd4cc03132eac7e3c38273';

class RecipeRepository {
  async find(query) {
    try {
      //const from = Math.floor(Math.random() * 100); // случайное число от 0 до 99
      const randomParam = Math.random(); // Генерирует случайное число между 0 и 1

      const response = await fetch(
        `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${encodeURI(query)}&randomParam=${randomParam}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      //Проверяем, выдал ли сервер хоть какую-то информацию:
      if (Array.isArray(data.hits) && data.hits.length === 0) {
        // Если сервер вернул пустой массив, выводим сообщение с ошибкой:

        const error1 = new ErrorMsg(`Nothing found for \"${query}\". Try again`).render();
        const message = document.getElementById('dynamic-elements');
        message.appendChild(error1);
      }

      const result = [];

      data.hits.forEach(({ recipe }) => {
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
    catch (error) {
      //В случае, если не удалось получить данные с сервера, выведем ошибку:

      const error2 = new ErrorMsg(`${error.message}. Server is unavalable`).render();
      const message = document.getElementById('dynamic-elements');
      message.appendChild(error2);

      //Возвращаем объект ошибки с помощью класса, прописанного в domain/Error.js и импортированного в начале
      return new ErrorObj(error.message);
    }
  }
}

export default RecipeRepository;
