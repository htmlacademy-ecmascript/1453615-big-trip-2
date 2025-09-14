import {createElement} from '../render.js';

function createNewEventListItemTemplate() {
  return '<li class="trip-events__item"></li>';
}

export default class NewEventListItemView {
  getTemplate() {
    return createNewEventListItemTemplate();
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
