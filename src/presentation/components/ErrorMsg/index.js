//Попытаюсь написать класс для вывода сообщения об ошибке на страницу:
import "./styles.scss";

class ErrorMsg {

    #block = document.createElement('p');

    constructor(message) {
        this.message = message;

    }

    render() {

        this.#block.className = "error-msg";
        this.#block.innerText = this.message;

        return this.#block

    }
}

export { ErrorMsg };