import React from 'react';

interface GlobalLayoutStyles {
  container: React.CSSProperties;
}

const styles: GlobalLayoutStyles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100vh',
  },
};

export default styles;
