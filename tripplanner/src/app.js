class TripPlanner {
  constructor (trip) {
    console.log(trip)
  }
}

const tripCards = {
  params: null,
  cards: []
}

const card = {
  from: '',
  to: '',
  transportType: 'train',
  additionalInfo: {

  }
}

const planner = new TripPlanner(tripCards)
