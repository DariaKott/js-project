import './assets/styles/global.scss';
import { TaskForm } from './presentation/components/TaskForm';
import RecipeRepository from "./domain/service/RecipeRepository";
import { Recipes } from "./presentation/components/Recipes";

const repository = new RecipeRepository();
const recipes = new Recipes();

const onSubmit = async (data) => {
  //Проверка на наличие сообщений об ошибке на странице:
  const existingErrorMsg = document.querySelector('.error-msg');
  // Если элемент существует, удаляем его:
  if (existingErrorMsg) {
    existingErrorMsg.remove();
  }

  const result = await repository.find(data.query);

  recipes.update(result);
}

const form = new TaskForm(onSubmit);

const dynamicElements = document.getElementById('dynamic-elements');

dynamicElements.appendChild(form.render());
dynamicElements.appendChild(recipes.render());
