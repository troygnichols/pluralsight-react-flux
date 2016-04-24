import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = React.createClass({
  propTypes: {
    author:   PropTypes.object.isRequired,
    onSave:   PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors:   PropTypes.object
  },

  render() {
    return (
      <form>
        <TextInput
          name="firstName"
          label="First Name"
          onChange={this.props.onChange}
          value={this.props.author.firstName}
          error={this.props.errors.firstName}
          />
        <br/>

        <TextInput
          name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          error={this.props.errors.lastName}
          />

        <br/>
        <input
          className="btn btn-default"
          type="submit"
          value="Save"
          onClick={this.props.onSave}
          error={this.props.errors.lastName}
         />
      </form>
    );
  }
});

export default AuthorForm;
