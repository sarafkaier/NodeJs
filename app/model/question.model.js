module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        question: {
            type: Sequelize.STRING
        },
        reponse1: {
            type: Sequelize.STRING
        },reponse2: {
            type: Sequelize.STRING
        },reponse3: {
            type: Sequelize.STRING
        },reponse4: {
            type: Sequelize.STRING
        },
        bonneReponse: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: true
    });
    return Question;
}