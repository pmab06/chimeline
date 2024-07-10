const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para permitir requests cross-origin durante o desenvolvimento
const cors = require('cors');
app.use(cors());

// Serve arquivos estáticos do diretório build do React
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/api', (req, res) => {
  res.send('Hello from Express!');
});

// Para todas as outras rotas, serve o arquivo index.html do React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`Hi! Express server running on port ${port}`);
});