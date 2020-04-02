import React, { Component } from 'react';
import web3 from './web3';
import lottery from './lottery';

interface AppProps {
}

interface AppState {
  manager: string,
  players: string[],
  balance: string,
  value: string,
  message: string
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      manager: '',
      players: [],
      balance: '',
      value: '',
      message: ''
    };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });

  }

  onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    this.setState({ message: 'Waiting on transaction success...' });

    const accounts: string[] = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({ message: 'You have been entered!' });
  }


  onClick = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();
    this.setState({ message: 'Waiting on transaction success...' });

    const accounts: string[] = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });
    this.setState({ message: 'A winner has been picked!' });
  }
  render() {
    return (
      <div>
        <h2>Lottory contract</h2>
        <p>
          this contract is managed by{this.state.manager}
          there are currently {this.state.players.length} are playing
            and there is {web3.utils.fromWei(this.state.balance, 'ether')} $ in the game
        </p>
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>


        <hr />
        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>
        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
