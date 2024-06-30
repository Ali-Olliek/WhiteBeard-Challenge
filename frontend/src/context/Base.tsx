import React from 'react';
import { PaginationProvider } from './paginationContext';
import { LoadingProvider } from './loadingContext';

const BaseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadingProvider>
      <PaginationProvider>{children}</PaginationProvider>
    </LoadingProvider>
  );
};

export default BaseProvider;
