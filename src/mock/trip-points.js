import { getRandomArrayElement } from '../utils';

const mockTripPoints = [
  {
    "id": "1",
    "base_price": 20,
    "date_from": "2019-03-18T10:30:00.845Z",
    "date_to": "2019-03-18T11:00:00.375Z",
    "destination": "1",
    "is_favorite": true,
    "offers": [1, 2],
    "type": "taxi"
  },
  {
    "id": "2",
    "base_price": 160,
    "date_from": "2019-03-18T12:25:00.845Z",
    "date_to": "2019-03-18T13:35:00.375Z",
    "destination": "2",
    "is_favorite": false,
    "offers": [23],
    "type": "flight"
  },
  {
    "id": "3",
    "base_price": 160,
    "date_from": "2019-03-18T14:30:00.845Z",
    "date_to": "2019-03-18T16:05:00.375Z",
    "destination": "2",
    "is_favorite": true,
    "offers": [17],
    "type": "drive"
  },
  {
    "id": "4",
    "base_price": 600,
    "date_from": "2019-03-18T16:20:00.845Z",
    "date_to": "2019-03-18T17:00:00.375Z",
    "destination": "2",
    "is_favorite": true,
    "offers": [],
    "type": "check-in"
  },
  {
    "id": "5",
    "base_price": 50,
    "date_from": "2019-03-19T14:20:00.845Z",
    "date_to": "2019-03-19T13:00:00.375Z",
    "destination": "2",
    "is_favorite": false,
    "offers": [32, 35],
    "type": "sightseeing"
  },
  {
    "id": "6",
    "base_price": 20,
    "date_from": "2019-03-19T16:00:00.845Z",
    "date_to": "2019-03-19T17:00:00.375Z",
    "destination": "3",
    "is_favorite": false,
    "offers": [],
    "type": "drive"
  },
  {
    "id": "7",
    "base_price": 20,
    "date_from": "2019-03-19T18:00:00.845Z",
    "date_to": "2019-03-19T19:00:00.375Z",
    "destination": "3",
    "is_favorite": false,
    "offers": [25, 26],
    "type": "flight"
  },
  {
    "id": "8",
    "base_price": 20,
    "date_from": "2019-03-20T08:25:00.845Z",
    "date_to": "2019-03-20T09:25:00.375Z",
    "destination": "3",
    "is_favorite": false,
    "offers": [18, 20],
    "type": "drive"
  },
  {
    "id": "9",
    "base_price": 20,
    "date_from": "2019-03-20T11:15:00.845Z",
    "date_to": "2019-03-20T12:15:00.375Z",
    "destination": "3",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockTripPoints);
}

export {getRandomPoint};
