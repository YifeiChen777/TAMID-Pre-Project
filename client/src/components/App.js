import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import logo from './logo.svg';

import './App.scss';
import Submissions from './submissions/submissions';
import ExecuteButton from './Spinner/ExecuteButton';
import CodeEditor from './CodeEditor/CodeEditor';

class App extends Component {

  constructor() {
    super();

    this.state = {};
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
      console.log(`Data is: ${text}`);
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
            <CodeEditor/>
          </Grid>
          <Grid item xs={4} sm={2}>
            <ExecuteButton/>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CompilerResult/>
          </Grid> 
        </Grid>
      </div>
    );
  }
}

export default App;
