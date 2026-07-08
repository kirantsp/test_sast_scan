const express = require('express');
const mysql = require('mysql');
const { exec } = require('child_process');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());
const db = mysql.createConnection({
  host: 'localhost', user: 'root', password: 'x', database: 'test'
});
app.get('/greet', (req, res) => {
  const name = req.query.name;
  const html = `<h1>Hello, ${name}!</h1>`;
  res.send(html);
});
app.get('/echo', (req, res) => {
  const data = req.query.data;
  res.render('page', { content: data });
});
app.get('/user', (req, res) => {
  const id = req.query.id;
  const q = `SELECT * FROM users WHERE id = ${id}`;
  db.query(q, (err, rows) => res.json(rows));
});
