import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './CompilerResult.scss'

// Placeholder implementation of CodeEditor
class CompilerResult extends Component {

    constructor(){
      super();
    }    

    render() {
      let result;
      if (this.props.loading) {
        result = <Paper className='loading' elevation={5}></Paper> 
      }
      else {
        result = <Paper className='compilerResult' elevation={3}> <code> {this.props.executionResult} </code></Paper>
      }
      return (
        <div>
          {result}
        </div>
      );
    }
}

export default CompilerResult;