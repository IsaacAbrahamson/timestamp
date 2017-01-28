const Router = require('express').Router()
const Sugar = require('sugar-date').extend()

Router.get('/:date', (req, res, next) => {
  var date = req.params.date;

  // convert timestamp to number
  if (!isNaN(date)) date = Number(date)

  if (!Date.create(date).isValid()) res.json({
    natural: null,
    calendar: null,
    unix: null
  })
  
  else res.json({
    natural: Date.create(date).format('%A %B %e, %Y'),
    calendar: Date.create(date).short(),
    timestamp: Number(Date.create(date, { fromUTC: true }).format('{x}'))
  })
  
  next()
})

module.exports = Router;