//Здесь создаем класс Recipes, который будет выводить информацию о рецептах на странице
class Recipes {
  #block = document.createElement('div');
  #recipes = [];

  update(recipes) {
    this.#recipes = recipes;

    this.render();
  }

  render() {
    this.#block.innerHTML = '';

    this.#recipes.forEach(async (recipe) => {
      const image = document.createElement('img');

      image.src = recipe.image;

      this.#block.appendChild(image);

      const link = document.createElement('a');


      link.href = recipe.url;

      link.innerText = recipe.title;

      this.#block.appendChild(link);


      const calories = document.createElement('p');
      calories.innerText = `Calories: ${recipe.calories}`;
      this.#block.appendChild(calories);


      const cautions = document.createElement('p');
      cautions.innerText = `Cautions: ${recipe.cautions}`;
      this.#block.appendChild(cautions);

    });

    return this.#block;
  }
}

export { Recipes };
