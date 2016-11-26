var Sugar = require('sugar-date');
Sugar.extend();

module.exports = function (app) {
    app.get('/api/:date', function (req, res) {
        var date = req.params.date;

        // if date is a valid number, make it a number
        if (!isNaN(date)) date = Number(date);

        if (!Date.create(date).isValid()) {
            res.json({
                natural: null,
                calendar: null,
                unix: null
            });
            return;
        }

        const naturalDate = Date.create(date).format('%A %B %e, %Y'); // ex: Saturday November 26, 2016
        const calendarDate = Date.create(date).short(); // ex: 11/26/2016
        const timestampDate = Date.create(date).format('%F'); // ex: 11-26-2016
        const timestampUnix = Math.floor(new Date(timestampDate).getTime() / 1000); // ex: 1480118400

        res.json({
            natural: naturalDate,
            calendar: calendarDate,
            unix: timestampUnix
        });
    });
}