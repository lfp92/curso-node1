module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'cursonode'
        });

        connection.query('select * from noticias', function (error, result) {
            if (error) throw res.send({ error });
            res.send(result)

        });
        // res.render('noticias/noticias');
    });
}