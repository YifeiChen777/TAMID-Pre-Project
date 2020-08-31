'use strict';

const express = require('express');
const path = require('path');
const Judge0 = require('./judge0');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();
app.use(express.json());

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Hello world'
  };
  res.send(JSON.stringify(data, null, 2));
});

app.get('/posthere', (req, res) => {
  
  let input = 'public class Main { public static void main(String[] args) {   System.out.println("hello, world. this is Aaron!");   } }';
  const judge0 = new Judge0();

  async function theRequest(input){
    let key = await judge0.makeRequest(input);
    console.log(key);
    let response = await judge0.submissiongetter(key);
    console.log(response);
  }
  theRequest(input);
  const submission = {
    text: req.body.text
  }
//   console.log(submission);
  res.send(submission);
});

// Test post

app.post('/testpost',(req,res) => {
  res.send('test received!');
})
// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
