const locations_amphitheatre = [
  {
    value: 'Education Resource Centre',
    subOptions: [
      'Courtyard',
      'ERC Open Study Area',
      'ERC Roof Deck',
      'Open Area (near Seminar Wing)',
      'Open Area (near The Study)',
      'Open Area (near Writting Unit)',
      'Open Area (outside SR4 & 5)',
      'Town Green'
    ]
  },
  {
    value: 'Stephen Riady Centre',
    subOptions: [
      'Area outside LT52, LT53',
      'Area outside Visitor Centre',
      'Internal Street Level 1 outside Auditorium',
      'Internal Street Level 1 outside LTs',
      'Internal Street Level 2',
      'Internal Street Level 3',
      'UT Foyer'
    ]
  },
  {
    value: 'Town Plaza',
    subOptions: [
      'Graduate Residence Walkway',
      'Town Plaza Auditorium',
      'Town Plaza Informal Study Area',
      'Town Plaza Outdoor Area'
    ]
  }
]

const locations_conference = [
  {
    value: 'Education Resource Centre',
    subOptions: [
      // 'Ian & Peony Ferguson Study - Cubicle 1',
      // 'Ian & Peony Ferguson Study - Cubicle 2',
      // 'Ian & Peony Ferguson Study - Cubicle 3',
      // 'Ian & Peony Ferguson Study - Cubicle 4',
      // 'Ian & Peony Ferguson Study - Cubicle 5',
      // 'Ian & Peony Ferguson Study - Cubicle 6',
      // 'Ian & Peony Ferguson Study - Cubicle 7',
      // 'Ian & Peony Ferguson Study - Cubicle 8',
      // 'Ian & Peony Ferguson Study - Cubicle 9',
      // 'Ian & Peony Ferguson Study - Cubicle 10',
      // 'Ian & Peony Ferguson Study - Cubicle 11',
      // 'Ian & Peony Ferguson Study - Cubicle 12',
      // 'Ian & Peony Ferguson Study - Cubicle 13',
      // 'Ian & Peony Ferguson Study - Cubicle 14',
      // 'Ian & Peony Ferguson Study - Cubicle 15',
      // 'Ian & Peony Ferguson Study - Cubicle 16',
      // 'Mac Commons Learning Pod D1',
      // 'Mac Commons Learning Pod D2',
      // 'Mac Commons Learning Pod D3',
      // 'Mac Commons Learning Pod D4',
      'Meeting Room 1',
      'Meeting Room 2',
      'Meeting Room 3',
      'Meeting Room 4',
      'Meeting Room 5',
      // 'Meeting Room 6',
      // 'Meeting Room 7',
      // 'Meeting Room 8',
      // 'Meeting Room 9',
      // 'Meeting Room 10',
      'PC Commons Learning Pod 1',
      'PC Commons Learning Pod 2',
      'PC Commons Learning Pod 3',
      'PC Commons Learning Pod 4',
      // 'PC Commons Learning Pod 5',
      // 'PC Commons Learning Pod 6',
      // 'PC Commons Learning Pod 7',
      // 'PC Commons Learning Pod 8',
      // 'PC Commons Learning Pod 9'
    ]
  }
]

const locations_performing_arts = [
  {
    value: 'Stephen Riady Centre',
    subOptions: [
      'Dance Altelier 1',
      'Dance Studio',
      'Function Hall/Dance Atelier 2'
    ]
  }
]

const locations_performing_spaces = [
  {
    value: 'Stephen Riady Centre',
    subOptions: [
      'Practice Room 1',
      'Practice Room 2',
      'Practice Room 3',
      'Practice Room 4',
      'Practice Room 5',
      'Practice Room 6',
      'Practice Room 7',
      'Practice Room 8',
      'Practice Room 9',
      'Studio 1-6'
    ]
  }
]

const locations_seminar = [
  {
    value: 'Education Resource Centre',
    subOptions: [
      'Seminar Room 9',
      'Seminar Room 10',
      'Seminar Room 11',
    ]
  },
  {
    value: 'Stephen Riady Centre',
    subOptions: [
      'Seminar Room 1',
      'Seminar Room 2',
      'Seminar Room 3',
      'Seminar Room 4',
      'Seminar Room 5',
      'Seminar Room 6',
      'Seminar Room 7',
      'Seminar Room 8',
      'Seminar Room 9'
    ]
  },
  {
    value: 'Town Plaza',
    subOptions: [
      'Seminar Room 1',
      'Seminar Room 2',
      'Seminar Room 3',
      'Seminar Room 4',
      'Seminar Room 5',
      'Seminar Room 6',
      'Seminar Room 7'
    ]
  }
]

export const facilities = [
  // <option selected="selected" value="">Please select a facility type</option>
  {
    'value': 'Amphitheatre / Open Space',
    'locations': locations_amphitheatre
  },
  {
    'value': 'Conference / Meeting Room',
    'locations': locations_conference
  },
  {
    'value': '(Music Studio / Practice Room) - Performing Arts Space',
    'locations': locations_performing_arts
  },
  {
    'value': '(Music Studio / Practice Room) - Performing Spaces',
    'locations': locations_performing_spaces
  },
  {
    'value': 'Seminar Room',
    'locations': locations_seminar
  }
]
