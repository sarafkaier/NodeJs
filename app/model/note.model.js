module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define('note', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        note: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: true
    });
    return Note;
}