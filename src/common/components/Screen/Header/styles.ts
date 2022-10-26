import React from 'react';

import {defaultColors} from '../../../theme/colors';

interface GlobalLayoutStyles {
  container: React.CSSProperties;
  menuBtn: React.CSSProperties;
}

const styles: GlobalLayoutStyles = {
  container: {
    backgroundColor: defaultColors.WHITE,
    boxShadow: '0px 3px 2px 0px rgba(0, 0, 0, 0.2)',
  },
  menuBtn: {
    marginRight: 10
  }
};

export default styles;
