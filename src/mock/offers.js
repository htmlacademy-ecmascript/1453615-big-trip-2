const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        'title': 'Upgrade to comfort class',
        'price': 15
      },
      {
        'id': 'b2c3d4e5-f6g7-8901-bcde-f23456789012',
        'title': 'Extra stop',
        'price': 10
      },
      {
        'id': 'c3d4e5f6-g7h8-9012-cdef-345678901234',
        'title': 'Pet transportation',
        'price': 5
      },
      {
        'id': 'd4e5f6g7-h8i9-0123-defg-456789012345',
        'title': 'Luggage assistance',
        'price': 7
      }
    ]
  },
  {
    'type': 'bus',
    'offers': []
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 'e5f6g7h8-i9j0-1234-efgh-567890123456',
        'title': 'Seat selection (window/aisle)',
        'price': 10
      },
      {
        'id': 'f6g7h8i9-j0k1-2345-fghi-678901234567',
        'title': 'Upgrade to premium compartment',
        'price': 100
      },
      {
        'id': 'g7h8i9j0-k1l2-3456-ghij-789012345678',
        'title': 'Dining car lunch',
        'price': 25
      },
      {
        'id': 'h8i9j0k1-l2m3-4567-hijk-890123456789',
        'title': 'Extra power outlet',
        'price': 5
      }
    ]
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 'i9j0k1l2-m3n4-5678-ijkl-901234567890',
        'title': 'Cabin with window',
        'price': 70
      },
      {
        'id': 'j0k1l2m3-n4o5-6789-jklm-012345678901',
        'title': 'All-inclusive package (meals)',
        'price': 50
      },
      {
        'id': 'k1l2m3n4-o5p6-7890-klmn-123456789012',
        'title': 'Ship tour',
        'price': 15
      },
      {
        'id': 'l2m3n4o5-p6q7-8901-lmno-234567890123',
        'title': 'Spa package',
        'price': 45
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 'm3n4o5p6-q7r8-9012-mnop-345678901234',
        'title': 'Additional driver',
        'price': 20
      },
      {
        'id': 'n4o5p6q7-r8s9-0123-nopq-456789012345',
        'title': 'Child seat',
        'price': 10
      },
      {
        'id': 'o5p6q7r8-s9t0-1234-opqr-567890123456',
        'title': 'Full tank (pay now)',
        'price': 60
      },
      {
        'id': 'p6q7r8s9-t0u1-2345-pqrs-678901234567',
        'title': 'GPS navigator',
        'price': 5
      },
      {
        'id': 'q7r8s9t0-u1v2-3456-qrst-789012345678',
        'title': 'Full insurance coverage',
        'price': 30
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 'r8s9t0u1-v2w3-4567-rstu-890123456789',
        'title': 'Add luggage',
        'price': 50
      },
      {
        'id': 's9t0u1v2-w3x4-5678-stuv-901234567890',
        'title': 'Switch to comfort class',
        'price': 80
      },
      {
        'id': 't0u1v2w3-x4y5-6789-tuvw-012345678901',
        'title': 'Add meal',
        'price': 15
      },
      {
        'id': 'u1v2w3x4-y5z6-7890-uvwx-123456789012',
        'title': 'Choose seats',
        'price': 5
      },
      {
        'id': 'v2w3x4y5-z6a7-8901-vwxy-234567890123',
        'title': 'Priority boarding',
        'price': 10
      },
      {
        'id': 'w3x4y5z6-a7b8-9012-wxyz-345678901234',
        'title': 'Flight insurance',
        'price': 25
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': []
  },
  {
    'type': 'sightseeing',
    'offers': [
      {
        'id': 'x4y5z6a7-b8c9-0123-xyza-456789012345',
        'title': 'Audio guide',
        'price': 5
      },
      {
        'id': 'y5z6a7b8-c9d0-1234-yzab-567890123456',
        'title': 'Guided tour',
        'price': 25
      },
      {
        'id': 'z6a7b8c9-d0e1-2345-zabc-678901234567',
        'title': 'Photo permit',
        'price': 10
      },
      {
        'id': 'a7b8c9d0-e1f2-3456-abcd-789012345678',
        'title': 'Skip-the-line ticket',
        'price': 15
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 'b8c9d0e1-f2g3-4567-bcde-890123456789',
        'title': 'Window/terrace table',
        'price': 10
      },
      {
        'id': 'c9d0e1f2-g3h4-5678-cdef-901234567890',
        'title': 'Tasting set',
        'price': 40
      },
      {
        'id': 'd0e1f2g3-h4i5-6789-defg-012345678901',
        'title': 'Complimentary bottle of wine',
        'price': 0
      },
      {
        'id': 'e1f2g3h4-i5j6-7890-efgh-123456789012',
        'title': 'Celebration cake',
        'price': 25
      }
    ]
  }
];

export {mockOffers};
