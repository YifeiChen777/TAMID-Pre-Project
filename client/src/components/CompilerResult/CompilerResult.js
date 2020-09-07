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
      else if (this.props.executionResult == null){
        result = <Paper className='no-result'> The Output of your code will be displayed here </Paper>
      }
      else if (this.props.executionResult.compile_output) {
        result = <Paper className="compiler-error">{this.props.executionResult.compile_output}</Paper>
      }
      else{
        // TODO 
        result = 
        <Paper className='compilerResult' elevation={3}> 
          {this.props.executionResult.stdout}
          {this.props.executionResult.stderr} 

        </Paper>
      }
      return (
        <div>
          {result}
        </div>
      );
    }
}

export default CompilerResult;
