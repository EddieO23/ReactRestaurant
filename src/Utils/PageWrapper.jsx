import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PageWrapper({ children, bodyClass }) {
  const location = useLocation();

  useEffect(() => {
    document.body.className = bodyClass;
  }, [location, bodyClass]);

  return children;
}

export default PageWrapper;
