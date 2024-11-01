const express = require('express'); //Importo modulo Express
const app = express(); // Crea un'istanza dell'applicazione Express

// Definisco una route per la root ('/')
// Quando un client effettua una richiesta GET su "/", il server risponde con "Hello World!"
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

// Avvia il server sulla porta 3000 e stampa un messaggio di conferma nella console
app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
});
