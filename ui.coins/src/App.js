import React, { Component } from "react";
import { Header } from "./components/Header";
import { Coins } from "./components/Coins";
import OptimalCoinsPerValue from "./components/OptimalCoinsPerValue";
import { getCoins } from "./services/CoinService";

class App extends Component {

  state = {
    inputValue: 0,
    coins: [],
    numberOfCoins: 0
  }

  getCoins = () => {
    getCoins(this.state.inputValue)
      .then(coins => {
        this.setState({coins: coins, numberOfCoins: coins.length});
    });
  }

  onChangeValue = (e) => {
    let inputValue = e.target.value;
    this.setState({inputValue});
  }

  render() {    
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
                <OptimalCoinsPerValue
                  onChangeValue={this.onChangeValue}
                  getCoins={this.getCoins}
                  >
                </OptimalCoinsPerValue>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Coins coins={this.state.coins}></Coins>
        </div>
      </div>
    );
  }
}

export default App;