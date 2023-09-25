class Recipe {
  #url;
  #image;
  #title;

  constructor(url, image, title) {
    this.#url = url;
    this.#image = image;
    this.#title = title;

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
}

export default Recipe;
