import React, {useState} from 'react';

import Layout from '../../common/components/Screen/Screen';
import Header from '../../common/components/Screen/Header/Header';
import Body from '../../common/components/Screen/Body/Body';
import Sidebar from '../../common/components/Screen/Sidebar/Sidebar';
import DashboardLayout from '../../common/components/Screen/Body/Layouts/Dashboard/DashboardLayout';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Layout>
      <Header onClick={toggleSidebar} />
      <Body>
        <DashboardLayout />
      </Body>
      <Sidebar isOpen={openSidebar} onClose={toggleSidebar} />
    </Layout>
  );
};

export default Home;
