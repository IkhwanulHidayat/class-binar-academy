class Suit {
  constructor() {
    this.pilihanPlayer = ''
    this.pilihanKomputer = ''
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  pemenang() {
    const elemCom = document.getElementById('versus')
    elemCom.classList.add('div-vs')

    if (this.pilihanPlayer == this.pilihanKomputer) {
      elemCom.innerHTML = '<h3 class="text-result">DRAW</h3>'
    } else {
      if (this.pilihanPlayer == '1') {
        if (this.pilihanKomputer == '3') {
          elemCom.innerHTML = '<h3 class="text-result">You Win</h3>'
        } else {
          elemCom.innerHTML = '<h3 class="text-result">You Lose</h3>'
        }
      } else if (this.pilihanPlayer == '2') {
        if (this.pilihanKomputer == '1') {
          elemCom.innerHTML = '<h3 class="text-result">You Win</h3>'
        } else {
          elemCom.innerHTML = '<h3 class="text-result">You Lose</h3>'
        }
      } else if (this.pilihanPlayer == '3') {
        if (this.pilihanKomputer == '2') {
          elemCom.innerHTML = '<h3 class="text-result">You Win</h3>'
        } else {
          elemCom.innerHTML = '<h3 class="text-result">You Lose</h3>'
        }
      }
    }

    setTimeout(() => {
      document
        .getElementById('player-' + this.pilihanPlayer)
        .classList.remove('clicked')
      document
        .getElementById('com-' + this.pilihanKomputer)
        .classList.remove('clicked')
      this.pilihanPlayer = ''
      this.pilihanKomputer = ''

      elemCom.classList.remove('div-vs')
      document.getElementById('versus').innerHTML = '<h4>VS</h4>'
    }, 2500)
  }

  playerMemilih(id) {
    this.pilihanPlayer = id
    const element = document.getElementById('player-' + id)
    element.classList.add('clicked')

    this.komputerMemilih()
  }

  komputerMemilih() {
    setTimeout(() => {
      const random = this.getRandomInt(1, 3)
      this.pilihanKomputer = random
      const element = document.getElementById('com-' + random)
      element.classList.add('clicked')

      this.pemenang()
    }, 2000)
  }
}
function refresh() {
  document.location.reload()
}
const suit = new Suit()
