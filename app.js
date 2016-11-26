var express = require('express');
var app = express();

var dateController = require('./controllers/dateController');

dateController(app);

app.listen(3000);
console.log('listening on port 3000...');    