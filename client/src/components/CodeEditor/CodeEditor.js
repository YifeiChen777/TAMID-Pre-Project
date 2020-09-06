import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './CodeEditor.scss'

// Placeholder implementation of CodeEditor
class CodeEditor extends Component {

    constructor(){
      super();
      this.state = {};
    }    

    render() {
      return (
        // TODO 
        // Paper component and text area should be replaced by codemirror or other code editor 
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
