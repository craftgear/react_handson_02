import React, { Component } from 'react';

import HelloWorld from './components/HelloWorld';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello',
      to: 'World',
    };
    this.updateGreeting = this.updateGreeting.bind(this);
  }

  updateGreeting() {
    this.setState({ greeting: 'こんにちは' });
  }

  // componentDidMount() {
  /* Good
     setTimeout(() => {
     this.updateGreeting();
     }, 1000);
    */
  /* Bad
     setTimeout(function() {
     this.updateGreeting();
     }, 1000);
    */
  // }

  render() {
    return (
      <div className="App">
        <HelloWorld greeting={this.state.greeting} to={this.state.to} />
        <button onClick={this.updateGreeting}>日本語で</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
