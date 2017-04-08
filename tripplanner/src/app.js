const $errors = {
  noTrip: {
    arguments: `No any trip aguments provided to the constructor. \nPlease, provide some travel cards.`,
    cards: `No any travel cards provided to the constructor. \n Please, provide some travel cards.`
  }
}

class TripPlanner {
  constructor (trip) {
    if (!trip) {
      throw new Error($errors.noTrip.arguments)
    }
    const { cards, params } = trip
    if (!cards) {
      throw new Error($errors.noTrip.cards)
    }

    this.cards = cards
    this.sortedCards = cards

    console.log(cards)
  }

  planTrip () {
    this._sortCards()
  }

  _sortCards () {
    this.cardsTable = {}
    for (let card of cards) {
      console.log(card)
    }
  }
}

const card = {
  from: 'Madrid',
  to: 'Barcelona',
  transportType: 'train',
  additionalInfo: {
    seat: '45B'
  }
}

const card2 = {
  from: 'Barcelona',
  to: 'Gerona Airport',
  transportType: 'airport bus',
  additionalInfo: {
  }
}

const card3 = {
  from: 'Gerona Airport',
  to: 'Stockholm',
  transportType: 'aircraft',
  additionalInfo: {
    gate: '45B',
    seat: '3A',
    baggage: '344'
  }
}

const tripCards = {
  params: null,
  cards: [card, card2, card3]
}

const planner = new TripPlanner(tripCards)
