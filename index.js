const express = require("express"); //Importo modulo Express
const app = express(); // Crea un'istanza dell'applicazione Express

// Definisco una route per la root ('/')
// Quando un client effettua una richiesta GET su "/", il server risponde con "Hello World!"
app.get("/", (req, res) => {  
  res.send("Hello World!"); 
});

// Avvia il server sulla porta 3000 e stampa un messaggio nella console una volta avviato
app.listen(3000, () => {
  console.log("Server attivo su http://localhost:3000");
});