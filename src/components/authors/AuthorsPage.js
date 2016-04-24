import React from 'react';
import { Link } from 'react-router';
import AuthorApi from '../../api/authorApi';
import AuthorList from './AuthorList';

const AuthorsPage = React.createClass({
  getInitialState() {
    return {
      authors: []
    };
  },

  componentDidMount() {
    if (this.isMounted) {
      this.setState({
        authors: AuthorApi.getAllAuthors()
      });
    } else {
      console.log.debug('Component was not mounted, skipping state setup');
    }
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
