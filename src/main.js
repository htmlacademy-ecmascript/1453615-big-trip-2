import { RenderPosition, render } from './render';
import TripInfoView from './view/trip-info-view';
import FilterView from './view/filter-view';
import TripPresenter from './presenter/trip-presenter';

const tripMainContainer = document.querySelector('.trip-main');
const tripFiltersContainer = document.querySelector('.trip-controls__filters');
const tripBodyElement = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripFiltersContainer);

const tripPresenter = new TripPresenter({tripContainer: tripBodyElement});
tripPresenter.init();
