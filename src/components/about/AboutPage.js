import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses these technologies:
        </p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    )
  }
});

export default Home;
