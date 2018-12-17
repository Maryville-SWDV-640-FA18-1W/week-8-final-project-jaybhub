const express = require('express')
var ourData = require('./data.json')
var bodyParser = require('body-parser')
const app = express()
const port = 3003

app.use(express.static(__dirname + "/src"))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/src/index.html")
})

app.get('/quiz', function(req, res) {
    res.sendFile(__dirname + "/src/quiz.html")
})

app.get('/fanclub', function(req, res) {
    res.sendFile(__dirname + "/src/fanclub.html")
})

app.get('/turtle', function(req, res) {
    res.sendFile(__dirname + "/src/turtle.html")
})

app.post("/results", function(req, res) {
    ourData.quizResult = req.body.result;
    res.sendStatus(200);
})

app.get('/quizResults', function(req, res) {
    res.json({result:ourData.quizResult});
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}?`)
})
