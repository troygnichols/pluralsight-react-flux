import React from 'react';

const AuthorList = React.createClass({
  render() {
    const createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><a href={`/#authors/${author.id}`}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow)}
        </tbody>
      </table>
    );
  }
});

export default AuthorList;
