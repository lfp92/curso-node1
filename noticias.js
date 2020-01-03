var http = require('http');

var server = http.createServer(function (req, res) {
    var texto = '';
    var categoria = req.url;
    if (categoria === '/tecnologia') {
        texto = 'Notícias de tecnologia'
    } else if (categoria === '/moda') {
        texto = 'Notícias de moda'
    }
    var html = `<html>
    <head>
    <meta charset="utf-8"/>
    </head>
    <body>${texto}</body>
    </html>`;
    res.end(html)
});

server.listen(3000)