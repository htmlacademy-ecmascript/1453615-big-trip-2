import {getRandomPoint} from '../mock/trip-points.js';
import {mockOffers} from '../mock/offers.js';
import {mockDestinations} from '../mock/destinations.js';
import {POINTS_COUNT} from '../const.js';

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  offers = mockOffers;
  destinations = mockDestinations;

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  getDestinations() {
    return this.destinations;
  }
}
