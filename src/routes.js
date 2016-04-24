import React from 'react';
import Router, { DefaultRoute, NotFoundRoute, Redirect, Route }  from 'react-router';
import App from './components/app';
import HomePage from './components/HomePage';
import AuthorsPage from './components/authors/AuthorsPage';
import AboutPage from './components/about/AboutPage';
import NotFoundPage from './components/NotFound';

const Routes =
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage}/>
    <Route name="authors" handler={AuthorsPage}/>
    <Route name="about" path="about-us" handler={AboutPage}/>
    <NotFoundRoute handler={NotFoundPage}/>
    <Redirect from="about" to="about"/>
    <Redirect from="awthurs" to="authors"/>
  </Route>
;

export default Routes;
