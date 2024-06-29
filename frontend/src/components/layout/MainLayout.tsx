import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
