const db = require('../config/db.config.js');

const QuestionDb = db.question;

// Create question
exports.create = (req, res) => {
    let question = req.body;

    if (
            !question.hasOwnProperty('question')
        ||  !question.hasOwnProperty('reponse1')
        ||  !question.hasOwnProperty('reponse2')
        ||  !question.hasOwnProperty('reponse3')
        ||  !question.hasOwnProperty('reponse4')
        ||  !question.hasOwnProperty('bonneReponse')
    ) {
        res.send("Request must contain question, reponse1, reponse2, reponse3, reponse4 and bonneReponse fields.");
    } else {
        QuestionDb.create(question).then(result => {
            res.json(result);
        });
    }
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
    let id = question.id;

    console.log(question);
    QuestionDb.update(question,
        { where: { id: id } }
    ).then(() => {
        res.status(200).json({ msg: "updated successfully a question with id = " + id });
    });

};

// Delete a question by Id
exports.delete = (req, res) => {
    const id = req.params.questionId;
    QuestionDb.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'deleted successfully a question with id = ' + id });
    });
};