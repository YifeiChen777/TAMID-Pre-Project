import React, { Component } from 'react';
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
    console.log(body);
    this.fetchResult(body);
  };

  async fetchResult(body) {
    const url = '/testpost';
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
        });
      const json = await response.json();
      this.setState({ results : json});
  }

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
