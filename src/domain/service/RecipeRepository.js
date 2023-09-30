//Здесь создаем функцию, которая будет получать информацию из API
import Recipe from "../model/Recipe";
import ErrorObj from "../model/Error";

const APP_ID = '6a959212';
const APP_KEY = 'ce6bb34f67bd4cc03132eac7e3c38273';

class RecipeRepository {
  async find(query) {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${encodeURI(query)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

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
      console.log("Error!", error.message);

      const errorM = document.createElement('p');
      errorM.innerText = error.message;
      const m = document.getElementById('dynamic-elements');
      m.appendChild(errorM);

      //Возвращаем объек ошибки с помощью класса, прописанного в domain/entity/Error.js и импортированного в начале
      return new ErrorObj(error.message);
    }
  }
}

export default RecipeRepository;
