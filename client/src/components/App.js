import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ExecuteButton from './Spinner/ExecuteButton';
import CodeEditor from './CodeEditor/CodeEditor';
import CompilerResult from './CompilerResult/CompilerResult';
import fetchResult from '../api/fetchResult';
import './App.scss';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loading: false,
      executionResult: null, 
      sourceCode: `
public class Main {

  public static void main(String[] args) {
    // Write your Java code here


  }
}
    `
    };
  }

  onSourceCodeChange = (newValue) => {
    this.setState({ sourceCode: newValue });
  }


  handleClick = async () => {
    this.setState({ loading: true });
    const data = { 'text': this.state.sourceCode };
    const executionResult = await fetchResult(data);
    console.log({'result': executionResult.status.description});
    this.setState({ 
      executionResult,
      loading: false
  });
}

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const resp = await fetch('/api');

    window._resp = resp;

    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.log(`Invalid json: ${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };


  render() {
    return (
      <div className="App">
        <Grid container spacing = {3}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={5}>
            <CodeEditor
              sourceCode = {this.state.sourceCode}
              onSourceCodeChange = {this.onSourceCodeChange}
              loading={this.state.loading}
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <ExecuteButton 
              loading={this.state.loading}
              handleClick={this.handleClick}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <CompilerResult
              loading={this.state.loading}
              executionResult={this.state.executionResult}
            />
          </Grid> 
        </Grid>
      </div>
    );
  }
}

export default App;
