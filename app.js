var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

var dateController = require('./controllers/dateController');

dateController(app);

app.get('/', function (req, res) {
    res.send('<html><body><h3>Simple API made for Free Code Camp project. All dates in UTC time.</h3><p>Example: <a href="https://isaacabrahamson-timestamp.herokuapp.com/api/today">https://isaacabrahamson-timestamp.herokuapp.com/api/today</a></p><p>Example: <a href="https://isaacabrahamson-timestamp.herokuapp.com/api/yesterday">https://isaacabrahamson-timestamp.herokuapp.com/api/yesterday</a></p><p>Example: <a href="https://isaacabrahamson-timestamp.herokuapp.com/api/5daysago">https://isaacabrahamson-timestamp.herokuapp.com/api/5daysago</a></p><p>Example: <a href="https://isaacabrahamson-timestamp.herokuapp.com/api/07-05-1999">https://isaacabrahamson-timestamp.herokuapp.com/api/07-05-1999</a></p><p>Example: <a href="https://isaacabrahamson-timestamp.herokuapp.com/api/931132800000">https://isaacabrahamson-timestamp.herokuapp.com/api/931132800000</a></p></body></html>');
});

app.listen(PORT);
console.log('listening on port 3000...');    