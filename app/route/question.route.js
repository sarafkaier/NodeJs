module.exports = (app) => {
    const questions = require('../controller/question.controller.js');

    // Create question
    app.post('/api/question', questions.create);

    // Get All questions
    app.get('/api/question', questions.getAll);

    // Get question by Id 
    app.get('/api/question/:questionId', questions.getById);

    // Get questions by categorieId
    app.get('/api/question/categorie/:categorieId', questions.getByCategorie);

    //Update question
    app.put('/api/question', questions.update);

    // Delete question By Id
    app.delete('/api/question/:questionId', questions.delete);
}