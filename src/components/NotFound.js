import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = React.createClass({
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>sorry my dude but that page is not a real page in this web site</p>
        <p>
          <Link to="app">Back to Home</Link>
        </p>
      </div>
    );
  }
});

export default NotFoundPage;
