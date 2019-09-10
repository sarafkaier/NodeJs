module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        reponse1: {
            type: Sequelize.STRING,
            allowNull: false
        },reponse2: {
            type: Sequelize.STRING,
            allowNull: false
        },reponse3: {
            type: Sequelize.STRING,
            allowNull: false
        },reponse4: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bonneReponse: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },{
        timestamps: true
    });
    return Question;
}