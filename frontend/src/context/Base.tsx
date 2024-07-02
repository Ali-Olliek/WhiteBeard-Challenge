import React from 'react';
import { PaginationProvider } from './paginationContext';
import { LoadingProvider } from './loadingContext';
import { ResponsiveProvider } from './ResponsiveContext';

const BaseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResponsiveProvider>
      <LoadingProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </LoadingProvider>
    </ResponsiveProvider>
  );
};

export default BaseProvider;
