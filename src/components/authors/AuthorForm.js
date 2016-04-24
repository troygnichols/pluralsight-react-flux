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
          error={this.props.errors.firstName}
          />
        <br/>

        <TextInput
          name="lastName"
          label="Last Name"
          onChange={this.props.onChange}
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
