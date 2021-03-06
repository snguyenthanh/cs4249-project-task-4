/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

// import { HomePage } from './containers/HomePage/Loadable';
import { ImprovedPage } from './containers/ImprovedPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="CS4249 - Group 4: %s"
        defaultTitle="CS4249 - Group 4"
      >
        <meta name="description" content="CS4249 - Group 4 Pilot" />
      </Helmet>

      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={ImprovedPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
