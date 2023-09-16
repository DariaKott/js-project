class Recipe {
  #url;
  #image;

  constructor(url, image) {
    this.#url = url;
    this.#image = image;
  }

  get url() {
    return this.#url;
  }

  get image() {
    return this.#image;
  }
}

export default Recipe;
