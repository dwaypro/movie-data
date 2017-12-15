const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(__dirname + '/dist'));

app.use('/api', api);


app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname +'/dist/index.html'));
})

app.listen(process.env.PORT || 8080);


console.log('server listening');
