module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define('categorie', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        timestamps: true
    });
    return Categorie;
}