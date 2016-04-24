import React, { PropTypes } from 'react';

const TextInput = React.createClass({
  propTypes: {
    name:        PropTypes.string.isRequired,
    label:       PropTypes.string.isRequired,
    onChange:    PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value:       PropTypes.string,
    error:       PropTypes.string
  },

  render() {
    const { name, value, label, error, onChange } = this.props;
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += ' has-error';
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            className="form-control"
            ref={value}
            name={name}
            placeholder={label}
            type="text"
            value={value}
            onChange={onChange}
          />
          <div className="input">{error}</div>
        </div>
      </div>
    );
  }
});

export default TextInput;
