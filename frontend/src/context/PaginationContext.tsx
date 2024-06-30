import { createContext, useState } from 'react';

interface IPaginatorProps {
  page: number;
  perPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginatorContext = createContext<IPaginatorProps>({
  page: 1,
  perPage: 5,
  setPage: () => null,
  setPerPage: () => null,
});

export const PaginationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  return (
    <PaginatorContext.Provider value={{ page, perPage, setPage, setPerPage }}>
      {children}
    </PaginatorContext.Provider>
  );
};
