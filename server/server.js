const express = require('express');
const path = require('path');
const app = express();
const pool = require('./db');
const port = process.env.PORT;

// Middleware para permitir requests cross-origin durante o desenvolvimento
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos do diretório build do React
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/api', (req, res) => {
    res.send('Hello from Express!');
});


app.get('/api/posts', (req, res) => {
    pool.query('SELECT * FROM posts', (error, results, fields) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    }
    )
});

app.post('/api/posts', (req, res) => {
    const { author_id, content } = req.body;

    if ( author_id && content ) {
        const query = 'INSERT INTO posts (author_id, content) VALUES (?, ?)';
        pool.query(query, [author_id, content], (error, results) => {
            if (error) {
                console.log(error)
                return res.status(500).json({error: 'Something went wrong during query insertion.'})
            } else if (results) {
                return res.status(200).json({message: 'Post was sent successfully!'})
            }
        });

    } else {
        return res.status(400).json({ error: 'Missing fields detected' })
    }
});

// Para todas as outras rotas, serve o arquivo index.html do React
//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../client/index.html'));
//});

app.listen(port, () => {
    console.log(`Express: Hi! Server running on port ${port}`);
});