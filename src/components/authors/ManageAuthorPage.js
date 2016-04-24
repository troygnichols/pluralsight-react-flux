import React from 'react';
import Router from 'react-router';
import AuthorForm from './AuthorForm';
import AuthorApi from '../../api/AuthorApi';
import toastr from 'toastr';

const ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
  },

  setAuthorState(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.state.author[field] = value;
    this.setState({
      author: this.state.author
    });
  },

  saveAuthor(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved');
    this.transitionTo('authors');
  },

  render() {
    return (
      <div>
        <h1>Manage Author</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          />
      </div>
    );
  }
});

export default ManageAuthorPage;
