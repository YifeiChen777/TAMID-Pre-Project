import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './CodeEditor.scss'

// Placeholder implementation of CodeEditor
class CodeEditor extends Component {

    constructor(){
      super();
      this.state = {
        sourceCode: `
        // simply using react papers here

        // should be an editable text box

          import java.util.Stack;

          public class HelloWorld {
              public static void main(String[] args){ 
                System.out.println('hello world');
              }
          }
          
          
          `,
      };
    }    

    render() {
      return (
        <div>
          <Paper className='codeEditor' elevation={3}>
            <textarea 
              placeholder="Write your Java code here" 
              rows={8}
              cols={20}
            />
          </Paper>
        </div>
      );
    }
}

export default CodeEditor;