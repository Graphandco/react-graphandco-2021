import { useEffect } from 'react';

const PageAttributes = ({ bodyID, pageTitle }) => {
  useEffect(() => {
    document.body.setAttribute('id', bodyID);
    document.title = `${pageTitle} | Graph and Co`;
    window.scrollTo(0, 0);
    return () => {
      document.body.removeAttribute('id', bodyID);
    };
  }, [bodyID, pageTitle]);

  return null;
};

export default PageAttributes;
