/* eslint-disable */
import { jQuery as $, jQuery } from 'jQuery';
/* eslint-enable */

import React from 'react';
import Header from './common/Header';
import { RouteHandler } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

export default App;
