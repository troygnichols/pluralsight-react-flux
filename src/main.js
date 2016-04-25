import React from 'react';
import Router from 'react-router';
import Routes from './routes';
import InitializeActions from './actions/InitializeActions';

InitializeActions.initApp();

Router.run(Routes, function(Handler) {
  React.render(
    <Handler/>,
    document.getElementById('app')
  );
});
