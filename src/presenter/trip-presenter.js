import { render } from '../render';
import EventsListView from '../view/events-list-view';
import SortingView from '../view/sorting-view';
import PointEditView from '../view/point-edit-view';
import TripPointView from '../view/trip-point-view';

export default class TripPresenter {
  eventsListComponent = new EventsListView();

  constructor({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    const tripPoints = [...this.pointsModel.getPoints()];
    const offers = this.pointsModel.getOffers();
    const destinations = this.pointsModel.getDestinations();

    render(new SortingView(), this.tripContainer);
    render(this.eventsListComponent, this.tripContainer);
    render(new PointEditView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(tripPoints[i], offers, destinations), this.eventsListComponent.getElement());
    }
  }
}
