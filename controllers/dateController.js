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
            input: date,
            natural: Date.create(date).format('%A %B %e, %Y'),
            calendar: Date.create(date).short(),
            unixMilliseconds: Number(Date.create(date, { fromUTC: true }).format('{x}')),
            unixSeconds: Math.floor(Number(Date.create(date, { fromUTC: true }).format('{x}')) / 1000)
        });
    });
}