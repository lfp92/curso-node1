var mysql = require('mysql');

module.exports = function () {
    return function () {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'cursonode'
        });
        return connection;
    }
}
