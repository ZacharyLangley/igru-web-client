import React from 'react';
import {Navbar, NavbarBrand, Button} from 'reactstrap';

import styles from './styles';
import Logo from '../../Logo/Logo';

export interface HeaderProps {
  testID?: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({testID = 'global-layout-header', onClick}) => {
  return (
    <Navbar
      id={`${testID}:container`}
      color={'faded'}
      light
      style={styles.container}>
      <Button id={`${testID}:menu-btn`} style={styles.menuBtn} light outline onClick={onClick}>{'='}</Button>
      <NavbarBrand id={`${testID}:logo:container`} href='/' className='me-auto'>
        <Logo testID={`${testID}:logo`}/>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
