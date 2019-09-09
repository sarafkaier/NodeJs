const db = require('../config/db.config.js');

const CategorieDb = db.categorie;

// Create categorie
exports.create = (req, res) => {
    let categorie = req.body;

    if (!categorie.hasOwnProperty('name')) {
        res.send("Request must contain name fields.");
    } else {

        CategorieDb.create(categorie).then(result => {
            res.json(result);
        });
    }
};

// Get all categories
exports.getAll = (req, res) => {
    CategorieDb.findAll().then(result => {
        res.json(result);
    })
};

// Get categorie by id
exports.getById = (req, res) => {
    CategorieDb.findByPk(req.params.categorieId).then(result => {
        res.json(result);
    });
};


// Update Categorie 
exports.update = (req, res) => {
    let categorie = req.body;
    let id = req.body.id;
    CategorieDb.update(categorie,
        { where: { id: id } }
    ).then(() => {
        res.status(200).json({ msg: "updated successfully a categorie with id = " + id });
    });

};

// Delete a categorie by Id
exports.delete = (req, res) => {
    const id = req.params.categorieId;
    CategorieDb.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully a categorie with id = ' + id });
    });
};