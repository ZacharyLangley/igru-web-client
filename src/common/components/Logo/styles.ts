import React from 'react';
import {defaultColors} from '../../theme/colors';

interface LogoStyles {
  logoContainer: React.CSSProperties;
  text: React.CSSProperties;
}

const styles: LogoStyles = {
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 900,
    color: defaultColors.GREY,
    textAlign: 'center',
    lineHeight: 1,
    fontSize: 28,
    marginLeft: 8,
  },
};

export default styles;
