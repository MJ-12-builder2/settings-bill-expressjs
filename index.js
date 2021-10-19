const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./settings-bill');

var http = require('http')

const { response } = require('express');
    http.createServer(function (request,respond) {
        response.writeHead(200, {"Content-Type": "text/plain"})
        response.end("settings-bill-expressjs\n")
    }).listen(process.env.PORT)



const app = express ();
const settingsBill = SettingsBill();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
        res.render('index', {
            settings: settingsBill.getSettings()
            
        });
    });

app.post('/settings', function(req, res) {  
   settingsBill.setSettings({
        callCost: req.body.callCost,
        smsCost: req.body.smsCost,
        warningLevel: req.body.warningLevel,
        criticalLevel: req.body.criticalLevel,
    })

    res.redirect('/');
});

app.post('/action', function(req, res) {
    settingsBill.recordAction(req.body.actionType)
    totals: SettingsBill.totals()
    res.redirect('/');
});

app.get('/actions', function(req, res) {
    res.render('actions', {actions: settingsBill.actions()})
});

app.get('/actions/:actionType', function(req, res) {
    const actionType = req.params.actionType;
    res.render('actions', {actions: settingsBill.actionsFor(actionType)})
});

const PORT = process.env.PORT || 3011;

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log("App started at port:", PORT)
});





