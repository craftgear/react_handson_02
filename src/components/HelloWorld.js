// src/components/HelloWorld.js

import React from 'react';
import { connect } from 'react-redux';
import fetchTodos from '../actions/todo';

const styles = {
  helloWorld: {
    color: 'orange',
    backgroundColor: 'black',
  },
};

const HelloWorld = ({ greeting, to, dispatch }) => (
  <div>
    <h1 style={styles.helloWorld}>
      {greeting} {to}
    </h1>
    <button onClick={() => dispatch(fetchTodos())}>fetch todos</button>
  </div>
);

const mapStateToProps = state => ({
  greeting: state.helloWorld.greeting,
  to: state.helloWorld.to,
});

export default connect(mapStateToProps)(HelloWorld);
