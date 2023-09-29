//Здесь создаем функцию, которая будет получать информацию из API
import Recipe from "../model/Recipe";

const APP_ID = '6a959212';
const APP_KEY = 'ce6bb34f67bd4cc03132eac7e3c38273';

class RecipeRepository {
  async find(query) {
    const response = await fetch(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${encodeURI(query)}`
    );

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
}

export default RecipeRepository;
