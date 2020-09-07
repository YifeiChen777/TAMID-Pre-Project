import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './CodeEditor.scss'
import AceEditor from "react-ace";
import PropTypes from 'prop-types';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools"

// Placeholder implementation of CodeEditor
class CodeEditor extends Component {

    constructor(){
      super();
    }
    
    // onChange = (val) =>  {
    //   // this.props.onSourceCodeChange(e.target.value)
    //   // this.setState({ code: e.target.value });
    //   console.log("change", val);
    //   this.props.onSourceCodeChange(val);
    // }
    

    render() {
      return (
        // TODO 
        // Paper component and text area should be replaced by codemirror or other code editor 
        <div>

          {/* <Paper className='codeEditor' elevation={3}>
            <textarea 
              placeholder={this.props.sourceCode}
              rows={18}
              cols={40}
              onChange={this.props.onChange}
              defaultValue={this.props.sourceCode}
            />
          </Paper> */}

          <AceEditor
              className='codeEditor'
              mode="java"
              theme="xcode"
              onChange={this.props.onSourceCodeChange}
              // onChange={this.onChange}
              // name="UNIQUE_ID_OF_DIV"
              value={this.props.sourceCode}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
              }}
              readOnly={this.props.loading}
          />
        </div>
      );
    }
}

CodeEditor.propTypes = {
  onSourceCodeChange: PropTypes.func.isRequired
}

export default CodeEditor;
