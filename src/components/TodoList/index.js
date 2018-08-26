// src/components/TodoList/index.js

import React from 'react';
import { connect } from 'react-redux';
import TodoItem, { TodoHeader } from './TodoItem';

const styles = {
  list: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
  },
};

const TodoList = ({ todos }) => (
  <div style={styles.list}>
    <TodoHeader />
    {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todo.items,
});

export default connect(mapStateToProps)(TodoList);
