// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Create a route for /comments
app.get('/comments', (req, res) => {
  // Set the status code to 200 (OK)
  res.status(200);
  // Send the comments as JSON
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});