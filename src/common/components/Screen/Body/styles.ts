import React from 'react';
import {defaultColors} from '../../../theme/colors';

interface BodyStyles {
  container: React.CSSProperties;
}

const styles: BodyStyles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: defaultColors.GREEN,
    padding: '40px 70px 20px 40px',
  },
};

export default styles;
