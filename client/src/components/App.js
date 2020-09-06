import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import logo from './logo.svg';

import './App.scss';
import Submissions from './submissions/submissions';
import ExecuteButton from './Spinner/ExecuteButton';
import CodeEditor from './CodeEditor/CodeEditor';
import CompilerResult from './CompilerResult/CompilerResult';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loading: false,
      executionResult: 'The output of your code will be displayed here'
    };
  }

  handleClick = () => {
    this.setState({ loading: true });


    // simulate server fetching until back-end is wired up
    // spin for 2 seconds to simulate api fetching.
    setTimeout(() => {
      this.setState({ loading: false })
      // placeholder for now
      // but this should call the api to get the executionResult
      this.setState({ executionResult: 'Hello World'}); 

    }, 2000);
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
            <CodeEditor/>
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
