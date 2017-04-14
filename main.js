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


function generateAndRender (number) {
  const cards = cardsGenerator(number)
  console.log(cards)
  const trip = new TripPlanner(cards).planTrip().renderToHTML()
  document.querySelector('#app').innerHTML = trip
  c3('#app div')
    .addClass('instruction')
}

const tripCards = [card2, card, card3]

const planner = new TripPlanner(tripCards)
const trip = planner.planTrip()
trip.render()

const html = trip.renderToHTML()

document.querySelector('#app').innerHTML = html


const selectors = {
  transport: {
    sel: `span[data-transport='1']`,
    class: 'legend__indicator--green'
  },
  startingPoint: {
    sel: `span[data-start='1']`,
    class: 'legend__indicator--red'
  },
  destination: {
    sel: `span[data-destination='1']`,
    class: 'legend__indicator--blue'
  },
  additionalInfo: {
    sel: `span[data-additional='1']`,
    class: 'legend__indicator--default'
  }
}

c3('#app div')
  .addClass('instruction')


function toggleHighlight () {
  c3('#highlight').toggle('button--active')
  c3(selectors.transport.sel)
    .toggle(selectors.transport.class)

  c3(selectors.startingPoint.sel)
    .toggle(selectors.startingPoint.class)

  c3(selectors.destination.sel)
    .toggle(selectors.destination.class)

  c3(selectors.additionalInfo.sel)
    .toggle(selectors.additionalInfo.class)

  const btn = document.querySelector('#highlight')
  if (c3(selectors.transport.sel).hasClass(selectors.transport.class)) {
    btn.innerHTML = 'Отсветить'
  }  else {
    btn.innerHTML = 'Подсветить'
  }
}
