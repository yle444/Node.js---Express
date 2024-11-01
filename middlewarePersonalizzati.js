const express = require('express'); // Importa il modulo Express
const app = express(); // Crea un'applicazione Express

// Middleware di autenticazione
function authMiddleware(req, res, next) {
    const autorizzato = true;  // Supponiamo una verifica su token/sessione

    // Controlla se l'utente è autorizzato
    if (autorizzato) {
        next();  // Procede se l'utente è autorizzato
    } else {
        // Se non autorizzato, restituisce un errore 403 (Accesso negato)
        res.status(403).send('Accesso negato');
    }
}

// Applica il middleware alla rotta /dashboard
app.use('/dashboard', authMiddleware);

// Definisce la rotta /dashboard
// Risponde con un messaggio di benvenuto se l'utente è autorizzato
app.get('/dashboard', (req, res) => res.send('Benvenuto alla Dashboard'));

// Avvia il server sulla porta 3000 e stampa un messaggio di conferma nella console
app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
});
