import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AuthorList = React.createClass({
  propTypes: {
    authors: PropTypes.array.isRequired
  },

  render() {
    const createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
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
