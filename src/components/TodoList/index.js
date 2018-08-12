import React from 'react';
import TodoItem, { TodoHeader } from './TodoItem';

const dummyTodos = [
  { title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
  { title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
  { title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
  { title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
];

const styles = {
  list: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
  },
};

export default ({ todos = dummyTodos }) => (
  <div style={styles.list}>
    <TodoHeader />
    {todos.map(todo => <TodoItem {...todo} />)}
  </div>
);
