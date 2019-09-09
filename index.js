//SERVEUR

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var server = app.listen(8080, 'localhost', () => {
    console.log("\x1b[44m%s\x1b[0m", "Serveur Run at http://"+ server.address().address +":"+ server.address().port);
})



const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8100',
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions));



//DATABASE

const db = require('./app/config/db.config.js');

db.sequelize.authenticate()
.then(function () {
    console.log("\x1b[44m%s\x1b[0m", "DATABASE CONNECTED ! ");
})
.catch(function (err) {
    console.log("\x1b[44m%s\x1b[0m", "DATABASE PROBLEM !" + err);
});

db.sequelize.sync({force: true}).then(() => {
    const init = require('./app/config/initDb.js');
    init.initialize();
    console.log("\x1b[44m%s\x1b[0m", 'Database Initialized');

    
}).catch((err) => {
    console.log("\x1b[44m%s\x1b[0m", 'DataBase not Initialized : '+ err);
});

//ROUTES

require('./app/route/categorie.route.js')(app);
require('./app/route/question.route.js')(app);
require('./app/route/user.route.js')(app);
require('./app/route/note.route.js')(app);



// TESTING 

module.exports = app;