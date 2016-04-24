import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img width="100px;" src="images/pluralsight-logo.png" alt="Pluralsight Logo"/>
          </a>
          <ul className="nav navbar-nav">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#authors">Authors</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default Header;
