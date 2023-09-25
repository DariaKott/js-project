import './styles.scss';

class Button {
  constructor(onClick, text) {
    this.onClick = onClick;
    this.text = 'Search';
  }

  onClickHandler = (e) => {
    e.preventDefault();

    this.onClick();
  };

  render() {
    const button = document.createElement('button');

    button.addEventListener('click', this.onClickHandler);
    button.innerText = this.text;
    button.className = 'button';

    return button;
  }
}

export { Button };
