const express = require('express');//Importo modulo Express
const app = express(); // Crea un'istanza dell'applicazione Express

// Definisco una route per la root ('/')
// Quando un client effettua una richiesta GET su "/", il server risponde con "Benvenuto alla Home!"
app.get('/', (req, res) => res.send('Benvenuto alla Home!'));

// Definisce una route POST per '/submit'
// Quando un client invia una richiesta POST a '/submit', il server risponde con "Dati inviati con successo!"
app.post('/submit', (req, res) => res.send('Dati inviati con successo!'));

// Avvia il server sulla porta 3000 e stampa un messaggio di conferma nella console
app.listen(3000, () => console.log('Server avviato su http://localhost:3000'));
