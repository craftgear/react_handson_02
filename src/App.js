// src/App.js

import React, { Component } from 'react';

import HelloWorld from './components/HelloWorld';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HelloWorld />
        <TodoList />
      </div>
    );
  }
}

export default App;
