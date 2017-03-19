import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      value: '',
      valid: false,
      errorMessage: 'Input is invalid',
      errorVisible: false
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBlur(e) {
    console.log('handle bur');
  }

  handleChange(e) {
    var validData = this.props.validCheck;
    var isValid = !!e.target.value.match(validData);
    this.setState({
      valid: isValid,
      errorVisible: !isValid,
      value: e.target.value
    });
  }

  getErrorMessage() {
    if (this.state.errorVisible) {
      return (
        <div className="errorMessage">
          <span>{this.state.errorMessage}</span>
        </div>
      )
    }
  }

  render() {
    var optionalClass = this.state.errorVisible ? ' invalid' : ' valid';
    return(
      <div className="optionalClass">
        <label
          className={optionalClass}
          name={'label-' + this.props.name}
          id={'label-' + (this.props.id || this.props.name)}
          htmlFor={this.props.name}>
            {this.props.label}
        </label>
        <input
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBur}
          value={this.state.value}
          name={this.props.name}
          id={this.props.id || 'random'}
          max={this.props.max}
        />
        { this.getErrorMessage() }
      </div>
    );
  }

}

TextInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  name:  React.PropTypes.string.isRequired
}

export default TextInput;
