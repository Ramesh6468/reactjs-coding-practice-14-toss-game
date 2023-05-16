// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    image: headsImage,
    headsCount: 0,
    totalCount: 0,
    tailsCount: 0,
  }

  onSpinToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let Tossimage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    if (tossResult === 0) {
      Tossimage = headsImage
      latestHeadsCount += 1
    } else {
      Tossimage = tailsImage
      latestTailsCount += 1
    }
    this.setState({
      image: Tossimage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
      totalCount: latestHeadsCount + latestTailsCount,
    })
  }

  render() {
    const {image, headsCount, totalCount, tailsCount} = this.state
    return (
      <div className="bgContainer">
        <div className="coinContainer">
          <h1 className="title">Coin Toss Game</h1>
          <p className="heads">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.onSpinToss}>
            Toss Coin
          </button>
          <div className="resultsContainer">
            <p className="heads1">Total: {totalCount}</p>
            <p className="heads1">Heads: {headsCount}</p>
            <p className="heads1">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
