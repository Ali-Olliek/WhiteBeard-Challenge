import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='home-content'>{children}</div>
    </>
  );
}

export default MainLayout;
