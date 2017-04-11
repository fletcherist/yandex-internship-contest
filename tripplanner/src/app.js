'use strict';

const $errors = {
  noTrip: {
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
  constructor (cards) {
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
    return this
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

      card.transportType = card.transportType.toLowerCase()
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

    for (const key in tables.startingPoint) {
      if (!tables.destinationPoint.hasOwnProperty(key)) {
        this.sortedCards.push(tables.startingPoint[key])
        break
      }
    }

    for (let i = 0; i < this.cards.length - 1; i++) {
      const currentCard = this.sortedCards[i]
      const nextCard = tables.startingPoint[currentCard.destinationPoint]
      this.sortedCards.push(nextCard)
    }
  }

  render () {
    for (const card of this.sortedCards) {
      this._composePassage(card)
    }
  }

  renderToHTML () {

  }

  _composePassage (card) {
    const {
      startingPoint,
      destinationPoint,
      transportType,
      additionalInfo, id
    } = card

    let passage = ``
    // Take is first
    const transport = this._formatTransport(card)
    const additional = this._formatAdditionalInformation(card)
    if (id % 3 === 0) {
      passage = `From ${startingPoint}, take ${transport} to ${destinationPoint}. ${additional}`
    } else {
      passage = `Take ${transport} from ${startingPoint} to ${destinationPoint}`
    }
    console.log(passage)

    return passage
  }

  _formatTransport (card) {
    const { transportType, additionalInfo } = card
    const { id } = additionalInfo

    let message = ``

    // Iterate over available transport
    // and return string depending
    // on type
    switch (transportType) {
      case 'aircraft':
      case 'airplane':
      case 'plane':
        message = 'flight'
      break
      default:
        message = transportType
      break
    }

    if (id) {
      message += ` ${id}`
    }
    return message
  }

  _formatAdditionalInformation (card) {
    const { additionalInfo } = card
  }
}

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
planner.planTrip().render()
