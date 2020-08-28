'use strict';

const express = require('express');
const path = require('path');

// Import requester and getsubmission classes
const Requester = require('./requester');
const GetSubmission = require('./getsubmission');

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

app.post('/posthere', (req, res) => {
  const submission = {
    text: req.body.text
}
res.send(submission);
});


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
