import React from 'react';
import { Link } from 'react-router';
import AuthorList from './AuthorList';
import AuthorStore from '../../stores/AuthorStore';
import AuthorActions from '../../actions/AuthorActions';

const AuthorsPage = React.createClass({
  getInitialState() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

export default AuthorsPage;
