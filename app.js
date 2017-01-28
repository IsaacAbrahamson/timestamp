const express = require('express')
const app = express()
const dateController = require('./controllers/dateController')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use('/favicon.ico', express.static('/assets/favicon.ico'))
app.use('/assets', express.static(__dirname + '/public'))
app.use('/api', dateController)
app.get('/', (req, res) => res.render('index') )

app.listen(PORT, () => console.log('listening on port 3000...') )