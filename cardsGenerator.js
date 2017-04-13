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

  const randomFromArray = array => array[Math.floor(Math.random() * array.length)]

  function cardsGenerator (number) {
    const places =
      ['Madrid', 'Barcelona', 'Gerona Airport', 'Stockholm', 'Bern',
        'Zürich', 'Ljubljana', 'Istanbul', 'New Delhi', 'Laos',
        'Shanghai 上海 Airport', 'Tokyo 東京', 'Toronto', 'Washington',
        'Baltimore', 'New York', 'Atlanta', 'Moscow', 'Merida', 'Costa Rica Airport',
        'Colombia', 'São Paulo', 'Rio de Janeiro', 'Chad', 'Bedesa', 'Kenya'
      ]

    const cards = []
    for (let i = 1; i <= number; i++) {
      let startingPoint = `${randomFromArray(places)} ${i}`
      let destinationPoint = ``
      let first = {
      }
      console.log(i)
    }
  }

  return cardsGenerator
})


// const card = {
//   startingPoint: 'Madrid',
//   destinationPoint: 'Barcelona',
//   transportType: 'train',
//   additionalInfo: {
//     id: '78A',
//     seat: '45B'
//   }
// }
//
// const card2 = {
//   startingPoint: 'Barcelona',
//   destinationPoint: 'Gerona Airport',
//   transportType: 'airport bus',
//   additionalInfo: {
//   }
// }
//
// const card3 = {
//   startingPoint: 'Gerona Airport',
//   destinationPoint: 'Stockholm',
//   transportType: 'aircraft',
//   additionalInfo: {
//     gate: '45B',
//     seat: '3A',
//     baggage: '344'
//   }
// }
