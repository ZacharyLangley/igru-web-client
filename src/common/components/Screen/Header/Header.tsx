import React from 'react';
import {Navbar, NavbarBrand, Button} from 'reactstrap';

import Logo from '../../Logo/Logo';
import './styles.scss';

export interface HeaderProps {
  testID?: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  testID = 'global-layout-header',
  onClick,
}) => {
  return (
    <Navbar
      id={`${testID}:container`}
      color={'faded'}
      light
      className={'header-container'}
    >
      <Button
        id={`${testID}:menu-btn`}
        className={'menu-btn'}
        light
        outline
        onClick={onClick}
      >
        {'='}
      </Button>
      <NavbarBrand id={`${testID}:logo:container`} href='/' className='me-auto'>
        <Logo testID={`${testID}:logo`} />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;