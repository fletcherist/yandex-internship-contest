'use strict';

const $errors = {
  noTrip: {
    arguments: `No any trip aguments provided to the constructor. \nPlease, provide some travel cards.`,
    cards: `No any travel cards provided to the constructor. \n Please, provide some travel cards.`
  },
  invalidCard: {
    common: `The following card is invalid: \n`,
    noFrom: 'Missing starting location. Please, provide starting location [startingPoint]',
    noTo: 'Missing destination place. Please, provide destination place [to]',
    noTransport: 'Missing transport type. Please, provide transport type [transportType]'
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
    this.sortedCards = []

    this._validateCards()
    this._formatCards()
  }

  planTrip () {
    this._sortCards()
  }

  _validateCards () {
    this.cards.map(card => {
      let _error = null
      if (!card.startingPoint) _error = 'noFrom'
      else if (!card.destinationPoint) _error = 'noTo'
      else if (!card.transportType) _error = 'noTransport'

      if (_error) {
        throw new Error(
          $errors.invalidCard.common +
          JSON.stringify(card, {}, 4) + '\n' +
          $errors.invalidCard[_error]
        )
      }
    })
  }

  // Give any card an unique identifier
  _formatCards () {
    this.cards.map((card, index) => card.id = index)
  }

  _sortCards () {
    const tables = {
      startingPoint: {},
      destinationPoint: {}
    }
    for (const card of this.cards) {
      tables.startingPoint[card.startingPoint] = card
      tables.destinationPoint[card.destinationPoint] = card
    }

    console.log(tables)

    for (const key in tables.startingPoint) {
      if (!tables.destinationPoint.hasOwnProperty(key)) {
        this.sortedCards.push(tables.startingPoint[key])
        break
      }
    }
    console.log(this.sortedCards)


  }
}

const card = {
  startingPoint: 'Madrid',
  destinationPoint: 'Barcelona',
  transportType: 'train',
  additionalInfo: {
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

const tripCards = {
  params: null,
  cards: [card2, card, card3]
}

const planner = new TripPlanner(tripCards)
planner.planTrip()
