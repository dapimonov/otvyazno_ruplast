import React, { Component } from 'react';
import './FormField.scss';

class FormField extends Component {
  render() {
    return (
      <div className='form-input-wrapper'>
        <input
          className='form-input'
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
        <label className='form-input-label'>
          {this.props.label}
        </label>
      </div>
    )
  }
}

export default FormField;