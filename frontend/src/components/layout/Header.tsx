import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { ResponsiveContext } from '../../context/ResponsiveContext';

function Header(): React.ReactElement {
  const navigate = useNavigate();
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const { isMobileView } = useContext(ResponsiveContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrinkHeader(true);
      } else {
        setShrinkHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <div className={`header-main ${shrinkHeader ? 'shrink' : ''}`}>
      <div className='header-logo-box'>
        {shrinkHeader ? (
          <></>
        ) : (
          <img onClick={handleGoToHome} src='./logo.png' />
        )}
      </div>
      <span>
        {isMobileView ? (
          <h1>All the news, anywhere you are.</h1>
        ) : (
          <h1>
            All the news, <br /> anywhere you are.
          </h1>
        )}
      </span>
    </div>
  );
}

export default Header;
