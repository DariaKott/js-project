import './styles.scss';

class Input {
  constructor(onChange) {
    this.onChange = onChange;
  }

  onChangeHandler = (e) => {
    const value = e.target.value;

    // // Проверяем введенное значение на наличие опечаток или цифр
    // if (!isNaN(value) || /[a-zA-Z]+\d*/.test(value)) {
    // if (/^[a-zA-Z]+$/.test(value)) {
    //   const errorMessage = document.createElement('p');
    //   errorMessage.innerHTML = "";
    //   errorMessage.className = 'error';
    //   errorMessage.textContent = ":( Sorry, we don't speak Elvish. Please switch to English. ";
    //   const mainElement = document.getElementById("dynamic-elements");
    //   mainElement.insertAdjacentElement('beforeend', errorMessage);

    // }

    // if (!/^[a-zA-Z]+$/.test(value)) {
    if (!isNaN(value) || /[a-zA-Z]+\d*/.test(value)) {
      // Удаляем существующее сообщение об ошибке, если оно существует
      const existingErrorMessage = document.querySelector('.error');
      if (existingErrorMessage) {
        existingErrorMessage.remove();
      }

      const errorMessage = document.createElement('p');
      errorMessage.className = 'error';
      errorMessage.textContent = ":( Sorry, we don't speak Elvish. Please switch to English.";

      // document.body.appendChild(errorMessage);
      const mainElement = document.getElementById("dynamic-elements");
      mainElement.insertAdjacentElement('beforeend', errorMessage);
    } else {
      // Если введенное значение валидное, то также удаляем существующее сообщение об ошибке
      const existingErrorMessage = document.querySelector('.error');
      if (existingErrorMessage) {
        existingErrorMessage.remove();
      }
    }


    this.onChange(value);
  };

  render() {
    const input = document.createElement('input');

    input.addEventListener('change', this.onChangeHandler);
    input.className = 'input';

    return input;
  }
}

export { Input };
