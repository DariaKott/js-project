class Recipe {
  #url;
  #image;
  #title;
  #calories;
  #cautions;

  constructor(url, image, title, calories, cautions) {
    this.#url = url;
    this.#image = image;
    this.#title = title;
    this.#calories = calories;
    this.#cautions = cautions;
  }

  get url() {
    return this.#url;
  }

  get image() {
    return this.#image;
  }

  get title() {
    return this.#title;
  }

  get calories() {
    return this.#calories;
  }

  get cautions() {
    return this.#cautions;
  }
}

export default Recipe;
