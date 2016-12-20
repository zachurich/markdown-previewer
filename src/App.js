import React, { Component } from 'react';
import marked from 'marked';

import Input from './Input';
import Output from './Output';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input : `${JSON.parse(localStorage.getItem('input')) || ''}`,
      output: `${JSON.parse(localStorage.getItem('output')) || ''}`
    }

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillUpdate() {
    localStorage.setItem('input', JSON.stringify(this.state.input));
    localStorage.setItem('output', JSON.stringify(this.state.output));
  }
  handleChange(e) {
    console.log('Writing.');
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });

    const inputText = e.target.value;
    const outputText = marked(e.target.value);

    this.setState({
      input: inputText,
      output: outputText
    });
  }
  render() {
    return (
      <div>
        <Input inputText={ this.state.input } change={ this.handleChange }/>
        <Output outputText={ this.state.output }/>
      </div>
    );
  }
}

export default App;
