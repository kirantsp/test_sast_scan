const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  const name = req.query.name;
  const html = `<h1>Hello, ${name}!</h1>`;
  res.send(html);
});

module.exports = app;
