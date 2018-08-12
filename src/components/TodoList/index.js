import React from 'react';
import TodoItem, { TodoHeader } from './TodoItem';

const dummyTodos = [
  { id: 1, title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
  { id: 2, title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
  { id: 3, title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
  { id: 4, title: 'aaaa', done: true, created_at: '2017-08-08 12:00:00' },
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
    {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </div>
);
