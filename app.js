const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dateController = require('./controllers/dateController');

dateController(app);

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index', { heart: String.fromCodePoint(0x1F3B6), pizza: String.fromCodePoint(0x1F355) });
});

app.listen(PORT);
console.log('listening on port 3000...');    