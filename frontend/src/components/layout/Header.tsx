import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Header.css';

function Header(): React.ReactElement {
  const navigate = useNavigate();
  const [shrinkHeader, setShrinkHeader] = useState(false);

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
        <img onClick={handleGoToHome} src='./logo.png' />
        <span>
          <h1>
            All the news, <br /> anywhere you are.
          </h1>
        </span>
      </div>
    </div>
  );
}

export default Header;
