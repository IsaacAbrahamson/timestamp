var Sugar = require('sugar-date');
Sugar.extend();

module.exports = function (app) {
    app.get('/api/:date', function (req, res) {
        var date = req.params.date;

        // convert timestamp to number
        if (!isNaN(date)) {
            date = Number(date);        
        }

        if (!Date.create(date).isValid()) {
            res.json({
                natural: null,
                calendar: null,
                unix: null
            });
            return;
        }

        res.json({
            natural: Date.create(date).format('%A %B %e, %Y'),
            calendar: Date.create(date).short(),
            timestamp: Number(Date.create(date, { fromUTC: true }).format('{x}'))
        });
    });
}