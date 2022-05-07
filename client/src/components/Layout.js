import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => {
  return (
    <div className='container'>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
