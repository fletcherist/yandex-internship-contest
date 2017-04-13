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

c3('#app div')
  .addClass('instruction')
function toggleHighlight () {
  c3(`span[data-transport='1']`)
    .toggle('legend__indicator--green')

  c3(`span[data-start='1']`)
    .toggle('legend__indicator--red')

  c3(`span[data-destination='1']`)
    .toggle('legend__indicator--blue')

  c3(`span[data-additional='1']`)
    .toggle('legend__indicator--default')

  const btn = document.querySelector('#highlight')
  if (c3(`span[data-transport='1']`).hasClass('legend__indicator--green')) {
    btn.innerHTML = 'Отсветить'
  }  else {
    btn.innerHTML = 'Подсветить'
  }

}
