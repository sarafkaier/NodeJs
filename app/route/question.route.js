module.exports = (app) => {
    const questions = require('../controller/question.controller.js');

    // Create question
    app.post('/api/question', questions.create);

    // Get All questions
    app.get('/api/question', questions.getAll);

    // Get question by Id 
    app.get('/api/question/:questionId', questions.getById);

    //Update question
    app.put('/api/question', questions.update);

    // Delete question By Id
    app.delete('/api/question/:questionId', questions.delete);
}