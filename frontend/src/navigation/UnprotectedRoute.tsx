import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

function UnprotectedRoute({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default UnprotectedRoute;
