import React from 'react';
import {Offcanvas, OffcanvasHeader, OffcanvasBody} from 'reactstrap';
import Logo from '../../Logo/Logo';

export interface SidebarProps {
  testID?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({testID = 'global-layout-sidebar', isOpen, onClose}) => {
  return (
    <Offcanvas id={`${testID}:container`} direction='start' isOpen={isOpen}>
      <OffcanvasHeader id={`${testID}:header`} toggle={onClose}>
        <Logo testID={`${testID}:logo`}/>
      </OffcanvasHeader>
      <OffcanvasBody id={`${testID}:body`}>
        <strong>This is the Sidebar body.</strong>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default Sidebar;
