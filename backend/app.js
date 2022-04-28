const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: `You're on the index api`,
  });
});

module.exports = app;
