// src/components/TodoList/TodoItem.js

import React from 'react';

const styles = {
  item: {
    width: '80%',
    borderBottom: '1px solid #EFEFEF',
    display: 'grid',
    gridTemplateColumns: '1fr 8fr 3fr',
    gridTemplateRows: 'auto',
    gridTemplateAreas: '"done title createdAt"',
  },
  done: {
    gridArea: 'done',
    placeSelf: 'center',
  },
  title: {
    gridArea: 'title',
    placeSelf: 'center left',
  },
  createdAt: {
    gridArea: 'createdAt',
    placeSelf: 'center',
  },
};

export const TodoHeader = ({
  doneLabel = '完了',
  titleLabel = 'やること',
  createdAtLabel = '作成日',
}) => (
  <div style={{ ...styles.item, color: 'gray' }}>
    <div style={styles.done}>{doneLabel}</div>
    <div style={styles.title}>{titleLabel}</div>
    <div style={styles.createdAt}>{createdAtLabel}</div>
  </div>
);

export default ({ done, title, created_at, ...rest }) => (
  <div style={styles.item}>
    <input style={styles.done} type="checkbox" checked={done ? 'checked' : ''} />
    <h4 style={styles.title}>{title}</h4>
    <div style={styles.createdAt}>{created_at}</div>
  </div>
);
