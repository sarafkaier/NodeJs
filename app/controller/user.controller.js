const db = require('../config/db.config.js');

const UserDb = db.user;

// Create user
exports.create = (req, res) => {
    let user = req.body;
    UserDb.create(user).then(result => {
        res.json(result);
    });
};

// Get all users
exports.getAll = (req, res) => {
    UserDb.findAll().then(result => {
        res.json(result);
    })
};

// Get user by id
exports.getById = (req, res) => {
    UserDb.findById(req.params.userId).then(result => {
        res.json(result);
    });
};


// Update user 
exports.update = (req, res) => {
    let user = req.body;
    let id = req.body.id;
    UserDb.update(user,
        { where: {id: id} }
    ).then(() => {
        res.status(200).json({msg:"updated successfully a user with id = " + id});
    });

};

// Delete a user by Id
exports.delete = (req, res) => {
    const id = req.params.userId;
    UserDb.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a user with id = ' + id});
    });
};