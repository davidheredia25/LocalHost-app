const app = require('./app');
require('./db');

app.listen(app.get('port'), () => {
    console.log(`Iniciando servidor en puerto: ${app.get('port')}`);
});