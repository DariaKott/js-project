//Создаем класс Item, который будет выводить данные одного рецепта на странице

import './styles.scss';

class Item {
    #block = document.createElement('div');
    #recipe;

    constructor(recipe, className) {
        this.#recipe = recipe;
        this.#block.className = 'item' + ' ' + className;
    }

    render() {
        const image = document.createElement('img');

        image.className = 'item__image';
        image.src = this.#recipe.image;

        this.#block.appendChild(image);

        const link = document.createElement('a');

        link.className = 'item__link';

        link.href = this.#recipe.url;
        link.innerText = this.#recipe.title;
        this.#block.appendChild(link);

        const calories = document.createElement('p');
        calories.innerText = "Calories: " + Math.round(this.#recipe.calories);
        this.#block.appendChild(calories);


        const cautionsText = Array.isArray(this.#recipe.cautions) && this.#recipe.cautions.length > 0
            ? this.#recipe.cautions.join(', ')  // Если массив не пуст, объединяем его элементы в строку
            : "None";  // Если массив пуст, присваиваем "None"

        const cautions = document.createElement('p');
        cautions.innerText = "Cautions: " + cautionsText;
        this.#block.appendChild(cautions);

        return this.#block;
    }
}

export { Item };