const env = require('./env.js');

const Sequelize = require('sequelize');


const sequelize = new Sequelize('quiz', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Tables
db.categorie = require('../model/categorie.model.js')(sequelize, Sequelize);
db.question = require('../model/question.model.js')(sequelize, Sequelize);
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.note = require('../model/note.model.js')(sequelize, Sequelize);

// Relations

// Categories Has Many Questions
db.question.belongsTo(db.categorie, {foreignKey: 'categorieId', targetKey: 'id'});

// Categorie has many note
db.note.belongsTo(db.categorie, {foreignKey: 'categorieId', targetKey: 'id'});

// User Has many Note
db.note.belongsTo(db.user, {foreignKey: 'userId', targetKey: 'id'});




module.exports = db;