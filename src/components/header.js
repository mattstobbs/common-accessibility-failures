import React from 'react';
import { Helmet } from 'react-helmet';
import { usePageTitle } from '../utils/usePageTitle';

const Header = () => {
  const title = usePageTitle();

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="The most common accessibility mistakes, and how to fix them."
      />
      <meta name="keywords" content="react,accessibility" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default Header;
