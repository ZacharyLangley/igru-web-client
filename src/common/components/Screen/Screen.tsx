import React from 'react';

import styles from './styles';

export interface GlobalLayoutProps {
  testID?: string;
  children: JSX.Element | JSX.Element[];
}

const Screen: React.FC<GlobalLayoutProps> = ({testID, children}) => {
  return (
    <div id={testID} style={styles.container}>
      {children}
    </div>
  );
};

export default Screen;
