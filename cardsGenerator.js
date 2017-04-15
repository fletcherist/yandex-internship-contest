(function (name, ctx, fn) {
  ctx[name] = fn()
})('cardsGenerator', this, function () {
  function shuffleArray (arr) {
    let i = arr.length
    while (i > 0) {
      i--
      let e = Math.floor(Math.random() * arr.length)
      let k = Math.floor(Math.random() * arr.length)

      let tmp = arr[e]
      arr[e] = arr[i]
      arr[i] = tmp

    }
    return arr
  }

  function randomFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const randomFromArray = array => array[Math.floor(Math.random() * array.length)]

  function generateAdditionalInfo() {
    const seat = randomFromInterval(1, 100)

    return {
      seat: seat
    }
  }
  function cardsGenerator (number) {
    const places =
      ['Madrid', 'Barcelona', 'Gerona Airport', 'Stockholm', 'Bern',
        'Zürich', 'Ljubljana', 'Istanbul', 'New Delhi', 'Laos',
        'Shanghai 上海 Airport', 'Tokyo 東京', 'Toronto', 'Washington',
        'Baltimore', 'New York', 'Atlanta', 'Moscow', 'Merida', 'Costa Rica Airport',
        'Colombia', 'São Paulo', 'Rio de Janeiro', 'Chad', 'Bedesa', 'Kenya'
      ]

    const transport = ['bus', 'aircraft', 'plane',
      'airplane', 'bicycle', 'train', 'airport bus'
    ]

    let cards = []

    const firstCard = {
      startingPoint: `${randomFromArray(places)} (0)`,
      destinationPoint: `${randomFromArray(places)} (0)`,
      transportType: `${randomFromArray(transport)}`,
      additionalInfo: generateAdditionalInfo()
    }
    cards.push(firstCard)

    for (let i = 1; i <= number; i++) {
      let card = {
        startingPoint: cards[i - 1].destinationPoint,
        destinationPoint: `${randomFromArray(places)} (${i})`,
        transportType: `${randomFromArray(transport)}`,
        additionalInfo: generateAdditionalInfo()
      }
      cards.push(card)
    }

    cards = shuffleArray(cards)
    return cards
  }

  return cardsGenerator
})
