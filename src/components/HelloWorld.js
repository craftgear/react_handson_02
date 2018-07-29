import React from 'react';

const styles = {
  helloWorld: {
    color: 'orange',
    backgroundColor: 'black',
  },
};

export default ({ greeting, to  }) => (
  <h1 style={styles.helloWorld}>
    {greeting} {to}
  </h1>
);
