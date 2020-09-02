'use strict';

const express = require('express');
const path = require('path');
const Judge0 = require('./judge0');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const JAVA_ID = 62;

// MAKE SURE TO ENTER YOUR RapidAPI KEY HERE: (ex. const RapidAPI_KEY = "7277655346msh461e0f9f... ETC.");
const RAPIDAPI_KEY = "7277655346msh461e0f9f07d7b79p18d3d0jsn042f30eb8a12";

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

// Send a post using "Postman" (chrome extension available online)
// Make sure to send to URL: http://localhost:8080/testpost

app.post('/testpost', (req, res) => {
   const input = {
      text: req.body.text
   };
   const judge0 = new Judge0(RAPIDAPI_KEY);

   async function theRequest(input) {
      let key = await judge0.makeRequest(input, JAVA_ID);
      async function waitResponse() {
         let response = await judge0.submissionGetter(key);
         let response_object = JSON.parse(response);
         console.log(response_object);
         if (response_object.status.id <= 2) {
            setTimeout(waitResponse, 200);
         } else {
            res.send(response);
         }
      }
      waitResponse();
   }
   theRequest(input.text);
})


// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
   response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
