const express = require('express');

const app = express();

app.get('/', function(req, res) {
        res.send('Settings Bill App') 
});

app.get('/', function(req, res) {
    res.send('Settings Bill App') 
});

app.get('/settings', function(req, res) {
    res.send('') 
});

app.get('/action', function(req, res) {
    res.send('') 
});

app.get('/actions', function(req, res) {
    res.send('') 
});

app.get('/actions/:type', function(req, res) {
    res.send('') 
});

const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
    console.log("App started at port:", PORT)
});
