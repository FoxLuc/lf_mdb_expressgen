var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri = 'mongodb+srv://ferrari_luca:badenoch88@feratlas.sekgr.mongodb.net/FerAtlas?retryWrites=true&w=majority'

/* GET users listing. */
router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'title': `${title}` }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/tenmovies', function(req, res, next){
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(get10Movies);

  function get10Movies(err){
    if(err) Console.log("Connessione al db non riuscita");
    else {
      const collection = client.db("sample_mflix").collection("movies");
      collection.find().limit(10).toArray(callBackQuery);
    }
  }

  function callBackQuery (err, result) {
    if (err) console.log(err.message);
    else res.send(result);
    client.close();
  }
})



module.exports = router;
