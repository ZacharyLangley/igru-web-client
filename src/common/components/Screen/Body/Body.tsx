import React from 'react';

import styles from './styles';

export interface BodyProps {
  testID?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

const Body: React.FC<BodyProps> = ({
  testID = 'global-layout-body',
  children,
}) => {
  return (
    <div id={testID} style={styles.container}>
      {children}
    </div>
  );
};

export default Body;
