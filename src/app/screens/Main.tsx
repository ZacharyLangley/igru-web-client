import React, { useState } from 'react';

import Layout from '../../common/components/Screen/Screen';
import Header from '../../common/components/Screen/Header/Header';
import Body from '../../common/components/Screen/Body/Body';
import Sidebar from '../../common/components/Screen/Sidebar/Sidebar';

export interface HomeProps {}

const Main: React.FC<HomeProps> = () => {

  const [openSidebar, setOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <Layout>
      <Header onClick={toggleSidebar}/>
      <Body>{'Body Content'}</Body>
      <Sidebar isOpen={openSidebar} onClose={toggleSidebar}/>
    </Layout>
  );
};

export default Main;
