import {createElement} from '../render.js';

function createNewEventsListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class NewEventsListView {
  getTemplate() {
    return createNewEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
