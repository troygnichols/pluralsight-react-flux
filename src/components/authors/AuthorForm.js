import React from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = React.createClass({
  render() {
    return (
      <form>
        <TextInput
          name="firstName"
          label="First Name"
          onChange={this.props.onChange}
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
         />
      </form>
    );
  }
});

export default AuthorForm;
