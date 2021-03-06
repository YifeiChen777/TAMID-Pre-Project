import React, { Component } from 'react';
import  Paper  from '@material-ui/core/Paper';
import './CompilerResult.scss'

class CompilerResult extends Component {

    constructor(){
      super();
      this.state={}
    }    

    render() {
      let result;
      if (this.props.loading) { //Loading
        result = <Paper className='loading' elevation={5}>Loading...</Paper> 
      }
      else if (this.props.executionResult == null){ //No Result
        result = 
        <Paper className='no-result' style={{backgroundColor: '#ECECEC'}}>
          <p style={{color: '#6A6A6A'}}>
            The output of your code will be displayed here
          </p>
        </Paper>
      }
      else if (this.props.executionResult.compile_output) { //Compile Error
        if(this.props.executionResult.status.description){
          result = 
            <Paper 
              className="compiler-error" 
              style={{backgroundColor: '#FCC2C2'}}>
              <p style = {{color: '#900C3F'}}>
                Status: {this.props.executionResult.status.description}
              </p>
              <p style = {{color: '#900C3F'}}>
              {this.props.executionResult.compile_output}
              </p>
            </Paper>
        }
      }
      else if (this.props.executionResult.stderr){ //Runtime Error
        result = 
          <Paper 
              className="runtime-error" 
              style={{backgroundColor: '#FCC2C2'}}>
              <p style = {{color: '#900C3F'}}>
                Status: {this.props.executionResult.status.description}
              </p>
              <p style = {{color: '#900C3F'}}>
              {this.props.executionResult.stderr}
              </p>
          </Paper>
      }
      else{ //Success 
        result = 
        <Paper 
          className='compilerResult' 
          elevation={3} 
          style={{backgroundColor: '#ABEBC6'}}> 
          <p style ={{color: '#0B5345'}}>
            Status: {this.props.executionResult.status.description}
          </p>
          <p style = {{color: '#0B5345'}}>
            Output: {this.props.executionResult.stdout}
          </p>
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
