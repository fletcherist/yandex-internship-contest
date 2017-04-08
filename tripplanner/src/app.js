'use strict';

const $errors = {
  noTrip: {
    arguments: `No any trip aguments provided to the constructor. \nPlease, provide some travel cards.`,
    cards: `No any travel cards provided to the constructor. \n Please, provide some travel cards.`
  },
  invalidCard: {
    common: `The following card is invalid: \n`,
    noFrom: 'Missing starting location. Please, provide starting location [from]',
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
    this.sortedCards = cards

    this._validateCards()
    this._formatCards()
  }

  planTrip () {
    this._sortCards()
  }

  _validateCards () {
    this.cards.map(card => {
      let _error = null
      if (!card.from) _error = 'noFrom'
      else if (!card.to) _error = 'noTo'
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
      from: {},
      to: {}
    }
    for (const card of this.cards) {
      tables.from[card.from] = card
      tables.to[card.to] = card
    }
    console.log(tables)
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
planner.planTrip()
