//DATABASE

const db = require('./app/config/db.config.js');

db.sequelize.authenticate()
.then(function () {
    console.log("DATABASE CONNECTED! ");
})
.catch(function (err) {
    console.log("DATABASE PROBLEM !");
});