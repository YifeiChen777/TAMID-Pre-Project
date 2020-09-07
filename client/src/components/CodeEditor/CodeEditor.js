import React, { Component } from 'react';
import  Paper  from '@material-ui/core/Paper';
import './CodeEditor.scss'

// Placeholder implementation of CodeEditor
class CodeEditor extends Component {

    constructor(){
      super();
      this.state={}
    }    

    render() {
      return (
        // TODO 
        // Paper component and text area should be replaced by codemirror or other code editor 
        <div>

          <Paper className='codeEditor' elevation={3}>
            <textarea 
              placeholder={this.props.sourceCode}
              rows={18}
              cols={40}
              onChange={this.props.onChange}
              defaultValue={this.props.sourceCode}
            />
          </Paper>
        </div>
      );
    }
}

export default CodeEditor;
