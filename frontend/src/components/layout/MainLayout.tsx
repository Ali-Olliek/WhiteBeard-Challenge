import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
