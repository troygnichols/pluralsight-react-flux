import React from 'react';
import Router from 'react-router';
import AuthorForm from './AuthorForm';
import AuthorApi from '../../api/AuthorApi';
import toastr from 'toastr';

const ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom(transition, component) {
      /* eslint-disable no-alert */
      if (component.state.isDirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
      /* eslint-enable no-alert */
    },
  },

  getInitialState() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      isDirty: false
    };
  },

  componentWillMount() {
    // calling setState from ..WillMount will not
    // cause a re-render, unlike ..DidMount
    let authorId = this.props.params.id;
    if (authorId) {
      this.setState({
        author: AuthorApi.getAuthorById(authorId)
      });
    }
  },

  setAuthorState(event) {
    this.setState({
      isDirty: true
    });

    let field = event.target.name;
    let value = event.target.value;

    this.state.author[field] = value;
    this.setState({
      author: this.state.author
    });
  },

  isAuthorFormValid() {
    let errors = {};

    if (this.state.author.firstName.length < 3) {
      errors.firstName = 'First name too short';
    }
    if (this.state.author.lastName.length < 3) {
      errors.lastName = 'Last name too short';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  },

  saveAuthor(event) {
    event.preventDefault();
    if (!this.isAuthorFormValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    this.setState({
      isDirty: false
    });
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
          errors={this.state.errors}
          />
      </div>
    );
  }
});

export default ManageAuthorPage;
