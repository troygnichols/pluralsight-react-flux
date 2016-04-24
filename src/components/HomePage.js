import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>React, React Router, and Flux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    )
  }
});

export default Home;
