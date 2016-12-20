import React, { Component } from 'react';

/*
  Tried using React's dangerouslySetInnerHTML,
  but it failed to render live output.
 */

class Output extends Component {
  componentDidMount() {
    // Get our initial output form local storage on mount
    document
      .querySelector('.markdown')
        .innerHTML = this.props.outputText;
  }
  componentDidUpdate() {
    // Updating our output
    document
    .querySelector('.markdown')
      .innerHTML = this.props.outputText;
  }
  render() {
    return (
      <div
        style={{
          padding: '20px',
          height: '100vh',
          maxWidth: '694px',
          flex: 1,
          background: 'white',
          color: '#555'
        }}
        className="markdown">
      </div>
    );
  }
}

export default Output;
