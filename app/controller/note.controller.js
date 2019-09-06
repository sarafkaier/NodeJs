const db = require('../config/db.config.js');

const NoteDb = db.note;

// Create note
exports.create = (req, res) => {
    let note = req.body;
    NoteDb.create(note).then(result => {
        res.json(result);
    });
};

// Get all notes
exports.getAll = (req, res) => {
    NoteDb.findAll().then(result => {
        res.json(result);
    })
};

// Get note by id
exports.getById = (req, res) => {
    NoteDb.findByPk(req.params.noteId).then(result => {
        res.json(result);
    });
};


// Update note 
exports.update = (req, res) => {
    let note = req.body;
    let id = req.body.id;
    NoteDb.update(note,
        { where: {id: id} }
    ).then(() => {
        res.status(200).json({msg:"updated successfully a note with id = " + id});
    });

};

// Delete a note by Id
exports.delete = (req, res) => {
    const id = req.params.noteId;
    NoteDb.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a note with id = ' + id});
    });
};