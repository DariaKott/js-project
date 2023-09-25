class Recipes {
  #block = document.createElement('div');
  #recipes = [];

  update(recipes) {
    this.#recipes = recipes;

    this.render();
  }

  render() {
    this.#block.innerHTML = '';

    this.#recipes.forEach((recipe) => {
      const image = document.createElement('img');

      image.src = recipe.image;

      this.#block.appendChild(image);

      const link = document.createElement('a');

      link.href = recipe.url;
      link.innerText = recipe.title;

      this.#block.appendChild(link);
    });

    return this.#block;
  }
}

export { Recipes };
