import { getRandomArrayElement } from '../utils';

const mockTripPoints = [
  {
    'id': 'f2g3h4i5-j6k7-8901-fghi-234567890123',
    'basePrice': 20,
    'dateFrom': '2019-03-18T10:30:00.845Z',
    'dateTo': '2019-03-18T11:00:00.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': true,
    'offers': ['a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'b2c3d4e5-f6g7-8901-bcde-f23456789012'],
    'type': 'taxi'
  },
  {
    'id': 'g3h4i5j6-k7l8-9012-ghij-345678901234',
    'basePrice': 160,
    'dateFrom': '2019-03-18T12:25:00.845Z',
    'dateTo': '2019-03-18T13:35:00.375Z',
    'destination': 'c8a5db82-b2fe-4c88-b93d-1f639e921e15',
    'isFavorite': false,
    'offers': ['s9t0u1v2-w3x4-5678-stuv-901234567890'],
    'type': 'flight'
  },
  {
    'id': 'h4i5j6k7-l8m9-0123-hijk-456789012345',
    'basePrice': 160,
    'dateFrom': '2019-03-18T14:30:00.845Z',
    'dateTo': '2019-03-18T16:05:00.375Z',
    'destination': 'c8a5db82-b2fe-4c88-b93d-1f639e921e15',
    'isFavorite': true,
    'offers': ['m3n4o5p6-q7r8-9012-mnop-345678901234'],
    'type': 'drive'
  },
  {
    'id': 'i5j6k7l8-m9n0-1234-ijkl-567890123456',
    'basePrice': 600,
    'dateFrom': '2019-03-18T16:20:00.845Z',
    'dateTo': '2019-03-18T17:00:00.375Z',
    'destination': 'c8a5db82-b2fe-4c88-b93d-1f639e921e15',
    'isFavorite': true,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': 'j6k7l8m9-n0o1-2345-jklm-678901234567',
    'basePrice': 50,
    'dateFrom': '2019-03-19T14:20:00.845Z',
    'dateTo': '2019-03-19T13:00:00.375Z',
    'destination': 'c8a5db82-b2fe-4c88-b93d-1f639e921e15',
    'isFavorite': false,
    'offers': ['x4y5z6a7-b8c9-0123-xyza-456789012345', 'a7b8c9d0-e1f2-3456-abcd-789012345678'],
    'type': 'sightseeing'
  },
  {
    'id': 'k7l8m9n0-o1p2-3456-klmn-789012345678',
    'basePrice': 20,
    'dateFrom': '2019-03-19T16:00:00.845Z',
    'dateTo': '2019-03-19T17:00:00.375Z',
    'destination': 'd9b6ec93-c3gf-5d99-c04e-2g740f032f26',
    'isFavorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 'l8m9n0o1-p2q3-4567-lmno-890123456789',
    'basePrice': 20,
    'dateFrom': '2019-03-19T18:00:00.845Z',
    'dateTo': '2019-03-19T19:00:00.375Z',
    'destination': 'd9b6ec93-c3gf-5d99-c04e-2g740f032f26',
    'isFavorite': false,
    'offers': ['u1v2w3x4-y5z6-7890-uvwx-123456789012', 'v2w3x4y5-z6a7-8901-vwxy-234567890123'],
    'type': 'flight'
  },
  {
    'id': 'm9n0o1p2-q3r4-5678-mnop-901234567890',
    'basePrice': 20,
    'dateFrom': '2019-03-20T08:25:00.845Z',
    'dateTo': '2019-03-20T09:25:00.375Z',
    'destination': 'd9b6ec93-c3gf-5d99-c04e-2g740f032f26',
    'isFavorite': false,
    'offers': ['n4o5p6q7-r8s9-0123-nopq-456789012345', 'p6q7r8s9-t0u1-2345-pqrs-678901234567'],
    'type': 'drive'
  },
  {
    'id': 'n0o1p2q3-r4s5-6789-nopq-012345678901',
    'basePrice': 20,
    'dateFrom': '2019-03-20T11:15:00.845Z',
    'dateTo': '2019-03-20T12:15:00.375Z',
    'destination': 'd9b6ec93-c3gf-5d99-c04e-2g740f032f26',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockTripPoints);
}

export {getRandomPoint};
