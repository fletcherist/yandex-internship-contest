const card = {
  startingPoint: 'Madrid',
  destinationPoint: 'Barcelona',
  transportType: 'train',
  additionalInfo: {
    id: '78A',
    seat: '45B'
  }
}

const card2 = {
  startingPoint: 'Barcelona',
  destinationPoint: 'Gerona Airport',
  transportType: 'airport bus',
  additionalInfo: {
  }
}

const card3 = {
  startingPoint: 'Gerona Airport',
  destinationPoint: 'Stockholm',
  transportType: 'aircraft',
  additionalInfo: {
    gate: '45B',
    seat: '3A',
    baggage: '344'
  }
}


const tripCards = [card2, card, card3]

const planner = new TripPlanner(tripCards)
const trip = planner.planTrip()
trip.render()

const html = trip.renderToHTML()


document.querySelector('#app').innerHTML = html

const spans = document.querySelectorAll('span')
spans.forEach(span => {
  span.style.backgroundColor = 'red'
})
