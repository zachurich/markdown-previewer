import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <textarea
          type="text"
          onChange={ this.props.change }
          value={ this.props.inputText }>
        </textarea>
      </div>
    );
  }
}

export default Input;
