import React from 'react';

import logo from '../../assets/branding/IGRU_White_logo.png';
import styles from './styles';

export interface LogoProps {
  testID?: string;
  height?: number;
  width?: number;
  hideName?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  testID = 'igru-branding-logo',
  height = 40,
  width = 40,
  hideName = false,
}) => (
  <div id={`${testID}:container`} style={styles.logoContainer}>
    <div id={`${testID}:img:container`}>
      <img
        id={`${testID}:img:asset`}
        src={logo}
        alt={'branding'}
        height={height}
        width={width}
      />
    </div>
    {!hideName && (
      <div id={`${testID}:text`} style={styles.text}>
        {'IGRU'}
      </div>
    )}
  </div>
);

export default Logo;
