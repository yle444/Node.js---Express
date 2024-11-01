const express = require('express'); // Importa il modulo Express
const app = express(); // Crea un'applicazione Express


// Configura il motore di visualizzazione
app.set('views', './views') // Imposta la directory delle viste (template HTML) in './views'
app.set('view engine', 'pug') // Imposta Pug come motore di template per le viste

// Middleware per gestire i dati del form
app.use(express.urlencoded({ extended: true }));

// Rotta GET per la homepage
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'}); // Renderizza la vista 'index' con il titolo e il messaggio specificati
  });

// Rotta GET per la pagina 'second'
  app.get('/second', function (req, res) {

    //Creato e popolo una lista di stringhe
    lista = []
    lista.push("blu")
    lista.push("giallo")
    lista.push("verde")
    /*con il metodo render prima dichiaro che passeremo il file second.pug poi gli passiamoo una variabile stringa, una variabile numerica e la lista di stringhe*/
    res.render('second', { nome: 'Carlo', anni: 39, lista : lista});
  });

// Rotta GET per visualizzare un form
  app.get('/form', function (req, res) {
    res.render('form');
  });
// Rotta POST per gestire l'invio del form
  app.post("/submit", function (req, res) { 
  let nome = req.body.nome // Estrae il valore del campo 'nome' dal corpo della richiesta


  console.log("Hai scritto " + nome)

})
 // Avvio del server
  app.listen(3000, () => {
     // Messaggio di log per indicare che il server è attivo
    console.log(`Example app listening at http://localhost:3000`);
});