/* eslint-disable */
import { jQuery as $, jQuery } from 'jQuery';
/* eslint-enable */

import React from 'react';
import Home from './components/HomePage';
import About from './components/about/AboutPage';
import Header from './components/common/Header';
import Authors from './components/authors/AuthorsPage';

const App = React.createClass({
  render() {
    let Child;
    switch(this.props.route) {
      case 'about':
        Child = About;
        break;
      case 'authors':
        Child = Authors
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );
  }
});

function render() {
  let route = window.location.hash.substr(1);
  React.render(
    <App route={route}/>,
    document.getElementById('app')
  );
}

window.addEventListener('hashchange', render);
render();
