import React, { Component } from 'react';
import './FormField.scss';

class FormField extends Component {
  render() {
    return (
      <div className='form-input-wrapper'>
        {
          this.props.type !== 'textarea' &&
          <input
            className='form-input'
            type={this.props.type}
            placeholder={this.props.placeholder}
            name={this.props.name}
          />
        }
        {
          this.props.type === 'textarea' &&
          <textarea
            className='form-input'
            placeholder={this.props.placeholder}
            name={this.props.name}
            rows={'5'}
          />
        }
        <label className='form-input-label'>
          {this.props.label}
        </label>
      </div>
    )
  }
}

export default FormField;