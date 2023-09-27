import './styles.scss';
import { Input } from "../../ui-kit/Input";
import { Button } from "../../ui-kit/Button";

class TaskForm {
  #data = {};

  constructor(onSubmit) {
    this.onSubmit = onSubmit;
  }

  onSubmitHandler = () => {
    this.onSubmit(this.#data);
  };

  onInputChange = (value) => {
    this.#data = { query: value }
  }

  render() {
    const form = document.createElement('form');

    form.addEventListener('submit', this.onSubmitHandler);
    form.className = 'task-form';

    const input = new Input(this.onInputChange);
    const button = new Button(this.onSubmitHandler, 'Search')

    form.appendChild(input.render());
    form.appendChild(button.render());

    return form;
  }
}

export { TaskForm };
