import './styles.scss';

class Input {
  constructor(onChange) {
    this.onChange = onChange;
  }

  onChangeHandler = (e) => {
    this.onChange(e.target.value);
  };

  render() {
    const input = document.createElement('input');

    input.addEventListener('change', this.onChangeHandler);
    input.className = 'input';

    return input;
  }
}

export { Input };
