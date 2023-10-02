import {App} from './presentation/App';

const dynamicElements = document.getElementById('dynamic-elements');

dynamicElements.appendChild(new App().render());
