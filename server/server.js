const express = require('express');
const path = require('path');
const app = express();
const connection = require('./db');
const port = 3000;

// Middleware para permitir requests cross-origin durante o desenvolvimento
const cors = require('cors');
app.use(cors());

// Serve arquivos estáticos do diretório build do React
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/api', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/api/tbdata', (req, res) => {
  connection.query('SELECT * FROM posts', (error, results, fields) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  }
  )
});

// Para todas as outras rotas, serve o arquivo index.html do React
//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../client/index.html'));
//});

app.listen(port, () => {
  console.log(`Express: Hi! Server running on port ${port}`);
});