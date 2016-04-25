import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AuthorActions from '../../actions/AuthorActions';
import toastr from 'toastr';

const AuthorList = React.createClass({
  propTypes: {
    authors: PropTypes.array.isRequired
  },

  deleteAuthor(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author deleted');
  },

  render() {
    const createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
          <td>
            <a href="#"
              onClick={this.deleteAuthor.bind(this, author.id)}
              className="btn btn-xs btn-danger"
            >Delete</a>
          </td>
        </tr>
      );
    };

    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    );
  }
});

export default AuthorList;
