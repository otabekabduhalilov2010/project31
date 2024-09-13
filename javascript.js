const catalog = [
    {
          name: 'AK-49',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SdsR9K6qNNxkExuSRl5RWtaas2EIeFLl8A&s',
          price: 5700,
          oldPrice: 16000,
          currency: '&',
          description: 'Evro'
    },
    {
          name: 'AK-48',
          img: 'https://e0.pxfuel.com/wallpapers/416/425/desktop-wallpaper-black-car-neon-lamborghini-vehicle-artwork-rear-view-%E2%80%A2-for-you-for-mobile-electric-blue-car.jpg',
          price: 5400,
          oldPrice: 11000,
          currency: '&',
          description: 'Dolor'
    },
    {
          name: 'AK-47',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvB5RCo18dTa3HeOi1PrmaXfpn-ZM7J741QetGTd-WCN4VT2eYLJaMs5KIrWG2p3aye0&usqp=CAU',
          price: 5300,
          oldPrice: 12000,
          currency: '&',
          description: 'Sum'
    },
    {
          name: 'AK-46',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcDfBzdhWYvYYWUfFUVlpecw4zkOyaW4HVplFyoYduX0EUiP21NF405ae9v5EvRv0TrY&usqp=CAU',
          price: 500,
          oldPrice: 1000,
          currency: '&',
          description: 'Rubl'
    },
]



const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += `
      <div class="card">
            <img src=${card.img} alt="">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <s>${card.oldPrice} ${card.currency}</s>
            <h4>${card.price}</h4>
            <button>Buy</button>
        </div>
     `
})


