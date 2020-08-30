'use strict';

const express = require('express');
const path = require('path');

// Import requester and getsubmission classes
const Requester = require('./requester');
const GetSubmission = require('./getsubmission');
// const { request } = require('http');

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
  const requester = new Requester();
  const getsubmission = new GetSubmission();
  // Here is the problem: the key is not being returned. Instead, it is simply returning undefined.
  // let key;
  // const promise1 = new Promise(resolve => {
    // resolve(key = requester.makeRequest('public class Main { public static void main(String[] args) {   System.out.println("hello, world. this is Aaron!");   } }'));
  // });
  // promise1.then(console.log(key));
  // let key = await requester.makeRequest('public class Main { public static void main(String[] args) {   System.out.println("hello, world. this is Aaron!");   } }');
  async function theRequest(input){
    let key = await requester.makeRequest(input);
    console.log(key);
    let response = await getsubmission.submissiongetter(key);
    console.log(response);
  }
  
  theRequest(input);

  // async function theResponse(key){
    
    
  //   return response;
  // }

  // let response = theResponse(key);

    // let key = await requester.makeRequest(input);
    // return requester.makeRequest(input);
  
  // GetKey(input).then(console.log);
  // console.log(key);
  const submission = {
    text: req.body.text
  }
  res.send(submission);
});


// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
