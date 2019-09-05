const env = require('./env.js');

const Sequelize = require('sequelize');


const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;





module.exports = db;