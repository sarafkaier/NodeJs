const db = require('../config/db.config.js');

const QuestionDb = db.question;

// Create question
exports.create = (req, res) => {
    let question = req.body;
    QuestionDb.create(question).then(result => {
        res.json(result);
    });
};

// Get all questions
exports.getAll = (req, res) => {
    QuestionDb.findAll().then(result => {
        res.json(result);
    })
};

// Get question by id
exports.getById = (req, res) => {
    QuestionDb.findByPk(req.params.questionId).then(result => {
        res.json(result);
    });
};


// Update question 
exports.update = (req, res) => {
    let question = req.body;
    let id = req.body.id;
    QuestionDb.update(question,
        { where: {id: id} }
    ).then(() => {
        res.status(200).json({msg:"updated successfully a question with id = " + id});
    });

};

// Delete a question by Id
exports.delete = (req, res) => {
    const id = req.params.questionId;
    QuestionDb.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({msg:'deleted successfully a question with id = ' + id});
    });
};