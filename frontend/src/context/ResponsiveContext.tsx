import { createContext, useEffect, useState } from 'react';

interface IResponsiveProps {
  isMobileView: boolean;
}

export const ResponsiveContext = createContext<IResponsiveProps>({
  isMobileView: false,
});

export const ResponsiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isMobileView }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
