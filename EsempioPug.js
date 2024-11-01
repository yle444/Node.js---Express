const express = require('express');
const app = express();

app.set('view engine', 'pug'); // Imposta Pug come motore di template
app.set('views', './views'); // Directory dei file Pug

// Definisco una route
app.get('/', (req, res) => {
    // Passo una variabile 'nome' al template
    res.render('esempio', { nome: 'Mario' });
  });
// Avvia il server
  app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});