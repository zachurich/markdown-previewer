import React, { Component } from 'react';

class Output extends Component {
  constructor() {
    super();
    let output = '';
  }
  componentWillMount() {
    // Get our initial output form local storage on mount
    console.log(this.props.outputText);
    this.output = this.props.outputText;
  }
  componentDidUpdate() {
    // Updating our output
    this.output = this.props.outputText;
  }
  render() {
    return (
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
           __html: this.output
        }}>
      </div>
    );
  }
}

export default Output;
