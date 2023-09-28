import './styles.scss';

class Input {
  constructor(onChange) {
    this.onChange = onChange;
  }

  onChangeHandler = (e) => {
    const value = e.target.value;

    // Проверяем введенное значение на наличие опечаток или цифр
    if (!isNaN(value) || /[a-zA-Z]+\d*/.test(value)) {
      const errorMessage = document.createElement('p');
      errorMessage.className = 'error';
      errorMessage.textContent = ":( Sorry, we don't speak Elvish.Please switch to human";
      document.body.appendChild(errorMessage);
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
