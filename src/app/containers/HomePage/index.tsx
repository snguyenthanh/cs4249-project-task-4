import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
    </div>
  );
}
