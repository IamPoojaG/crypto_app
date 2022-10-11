import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';

import './Home.css';

const Home = () => {
  return (
    <>
      <div className='home_container flex absolute_center'>
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default Home;
