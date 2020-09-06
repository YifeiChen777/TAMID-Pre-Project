import React, { Component } from 'react';
import fetchResult from '../../api/fetchResult'
import './submissions.scss';

class Submissions extends Component {
  constructor() {
    super();

    this.state = {
        results:{},
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const body = {'text' : this.data.value};
    const results = await fetchResult(body)
    this.setState({ results: results })
  };
  
  render() {
    return (
      <div>
         <div>
             <h2>Code</h2>
             <form onSubmit={this.handleSubmit}>
                 <textarea ref={input => this.data = input}></textarea>
                 <button  type="submit" className="btn btn-primary">Run</button>
             </form>
         </div>
         <h2>Result</h2>
         <ul>
         <li>{this.state.results && this.state.results.token}</li>
         <li>{this.state && this.state.results.stderr}</li>
         <li>{this.state && this.state.results.stdout}</li>
         <li>{this.state && this.state.results.compile_output}</li>
         </ul>
      </div>
    );
  }
}

export default Submissions;
