import React, { Component } from 'react';

import './input.css';

class Input extends Component {
  handleCopy() {
    console.log('tes');
    const textArea = document.querySelector('textarea');
    textArea.select();
    document.execCommand('copy');
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px',
        boxSizing: 'border-box',
        flexDirection: 'column',
        flex: 1
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '1.5em',
        }}>Write Here:</h1>
        <textarea
          style={{
            padding: '20px',
            fontSize: '1em',
            outline: 0,
            border: 'none',
            borderRadius: '3px',
            boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.3)',
            width: '100%',
            maxWidth: '500px',
            minWidth: '300px',
            minHeight: '50%',
            color: '#555'
          }}
          type="text"
          onChange={ this.props.change }
          value={ this.props.inputText }>
        </textarea>
        <div
          className='button'
          onClick={this.handleCopy}>
          Click to Copy!
        </div>
      </div>
    );
  }
}

export default Input;
