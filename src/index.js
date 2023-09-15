import './assets/global.scss';

import Task from './domain/model/Task';
import {TaskForm} from './presentation/components/TaskForm';

const task = new Task(
  'Новая задача',
  'Сделать что-то очень важное.',
  new Date(),
);

const form = new TaskForm((data) => console.log(data));

document.body.appendChild(form.render());
