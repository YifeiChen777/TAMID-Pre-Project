import React, { Component } from 'react';
import './CodeEditor.scss'
import AceEditor from "react-ace";
import PropTypes from 'prop-types';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools"

import ReactResizeDetector from 'react-resize-detector'


class CodeEditor extends Component {

    constructor(){
      super();
      this.state = {
        editorHeight: 400,
        editorWidth: "auto"
      }
      this.onResize = this.onResize.bind(this)
    }

    onResize (w, h) {
      this.setState({
        editorHeight: h,
        editorWidth: w
      })
    }
    render() {
      return (
        <div className="resizable">
          <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
          <AceEditor
              className='codeEditor'
              mode="java"
              theme="xcode"
              onChange={this.props.onSourceCodeChange}
              // name="UNIQUE_ID_OF_DIV"
              value={this.props.sourceCode}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
              }}
              readOnly={this.props.loading}
              // height={Infinity}
              // width={Infinity}
              onLoad={editorInstance => {
                editorInstance.container.style.resize = "both";
                // mouseup = css resize end
                document.addEventListener("mouseup", e => (
                  editorInstance.resize()
                ));
              }}
          />
        </div>
      );
    }
}

CodeEditor.propTypes = {
  onSourceCodeChange: PropTypes.func.isRequired,
  sourceCode: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default CodeEditor;
