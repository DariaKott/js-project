import './styles.scss';

class Input {
  constructor(onChange) {
    this.onChange = onChange;
  }

  onChangeHandler = (e) => {
    const value = e.target.value;

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
