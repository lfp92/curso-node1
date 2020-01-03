var app = require('./config/server');

require('./app/routes/home')(app);
require('./app/routes/form_add_noticia')(app);
require('./app/routes/noticias')(app);

app.listen(3000, function () {
    console.log('Servidor online')
})