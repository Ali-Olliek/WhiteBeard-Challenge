import { createContext, useState } from 'react';

interface ILoadingProps {
  isLoadingContent: boolean;
  toggleLoading: () => void;
}

export const LoadingContext = createContext<ILoadingProps>({
  isLoadingContent: false,
  toggleLoading: () => null,
});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoadingContent, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <LoadingContext.Provider value={{ isLoadingContent, toggleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
