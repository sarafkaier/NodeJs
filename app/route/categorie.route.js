module.exports = (app) => {
    const categories = require('../controller/categorie.controller.js');

    // Create Categorie
    app.post('/api/categorie', categories.create);

    // Get All Categories
    app.get('/api/categorie', categories.getAll);

    // Get categorie by Id 
    app.get('/api/categorie/:categorieId', categories.getById);

    //Update categorie
    app.put('/api/categorie', categories.update);

    // Delete Categorie By Id
    app.delete('/api/categorie/:categorieId', categories.delete);
}