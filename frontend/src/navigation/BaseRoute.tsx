import React from 'react';
import { Outlet } from 'react-router-dom';
import UnprotectedRoute from './UnprotectedRoute';

function BaseRoute({ isProtected }: { isProtected: boolean }) {
  return (
    <UnprotectedRoute>
      <Outlet />
    </UnprotectedRoute>
  );
}

export default BaseRoute;
