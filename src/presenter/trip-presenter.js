import { render } from '../render';
import EventsListView from '../view/events-list-view';
import EventListItemView from '../view/event-list-item-view';
import SortingView from '../view/sorting-view';
import PointAddView from '../view/point-add-view';
import TripPointView from '../view/trip-point-view';

export default class TripPresenter {
  eventsListComponent = new EventsListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new SortingView(), this.tripContainer);
    render(this.eventsListComponent, this.tripContainer);
    const listItemEditComponent = new EventListItemView();
    render(new PointAddView(), listItemEditComponent.getElement());
    render(listItemEditComponent, this.eventsListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      const listItemComponent = new EventListItemView();
      render(new TripPointView(), listItemComponent.getElement());
      render(listItemComponent, this.eventsListComponent.getElement());
    }
  }
}
