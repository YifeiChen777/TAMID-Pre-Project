import React, { Component } from 'react';
import  Paper  from '@material-ui/core/Paper';
import './CompilerResult.scss'


// Placeholder implementation of CodeEditor
class CompilerResult extends Component {

    constructor(){
      super();
      this.state={}
    }    

    render() {
      let result;
      if (this.props.loading) {
        result = <Paper className='loading' elevation={5}>Loading...</Paper> 
      }
      else if (this.props.executionResult == null){
        result = <Paper className='no-result'> The Output of your code will be displayed here </Paper>
      }
      else if (this.props.executionResult.compile_output) {
        if(this.props.executionResult.status.description){
          result = 
          <Paper 
            className="compiler-error" 
            style={{backgroundColor: '#FCC2C2'}}>
            <p style = {{color: '#900C3F'}}>
              {this.props.executionResult.status.description}
            </p>
          </Paper>
        }
      }
      else{
        result = 
        <Paper className='compilerResult' elevation={3} style={{backgroundColor: '#ABEBC6'}}> 
          <p style = {{color: '#0B5345'}}>Output: {this.props.executionResult.stdout}</p>
          <p style ={{color: '#0B5345'}}>Status: {this.props.executionResult.status.description}</p>
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
