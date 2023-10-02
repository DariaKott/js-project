import RecipeRepository from '../domain/service/RecipeRepository';
import {Recipes} from './components/Recipes';
import {TaskForm} from './components/TaskForm';
import {ErrorMsg} from './components/ErrorMsg';
import '../assets/styles/global.scss';

class App {
  #block = document.createElement('div');
  #repository = new RecipeRepository();
  #recipes = new Recipes();
  #errorMessage = '';

  #onSubmit = async (data) => {
    this.#errorMessage = '';

    try {
      const result = await this.#repository.find(data.query);

      this.#recipes.update(result);
    } catch (e) {
      //В случае, если не удалось получить данные с сервера, выведем ошибку:

      this.#errorMessage = e.message;
    }

    this.render();
  };

  render() {
    this.#block.innerHTML = '';

    const form = new TaskForm(this.#onSubmit);

    this.#block.appendChild(form.render());

    if (this.#errorMessage) {
      this.#block.appendChild(new ErrorMsg(this.#errorMessage).render());

      return this.#block;
    }

    this.#block.appendChild(this.#recipes.render());

    return this.#block;
  }
}

export { App };
