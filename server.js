var connection = require('../Note Taker/connection');
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

app.get("/", function(req, res) {
    res.send("Welcome to the Home Page!")
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get("/api/notes", function(req, res) {
    connection.query("SELECT * FROM notes order by id;", function(err, data) {
        if (err) {
          return res.status(500).end();
        }
        if (notes.length === 0){
        for (var i = 0; i < data.length; i++){
        var newNote = data[i];
        notes.push(newNote);
        }
      }
        res.send(notes);
        
    })
  });
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  })
  app.delete("/notes/:id", function(req, res) {
    // console.log(req.params.id);
    connection.query("Delete from notes where id = " + req.params.id, function(err, res){
      if (err) throw err;
      console.log("Deleted " + req.params.id);
      notes.splice(req.params.id - 1, 1);
      document.getElementById(this.id).empty();
    })
  })
  
  app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
    newNote.id = notes.length + 1;
    newQuery = "Insert into notes(title, body) values('" + req.body.title + "', '" +  req.body.body + "');";
    // console.log(newQuery);
    connection.query(newQuery, function (error, result)
    {
      notes.push(newNote);
      res.send(notes);
    })
  })

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });