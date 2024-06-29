import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{ height: '5%', backgroundColor: 'black' }}>
        <Header />
      </div>
      <div style={{ padding: '5%' }}>{children}</div>
    </div>
  );
}

export default MainLayout;
