import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="app" className="navbar-brand" href="/">
            <img width="100px;" src="images/pluralsight-logo.png" alt="Pluralsight Logo"/>
          </Link>
          <ul className="nav navbar-nav">
            <li>
              <Link to="app">Home</Link>
            </li>
            <li>
              <Link to="authors">Authors</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default Header;
