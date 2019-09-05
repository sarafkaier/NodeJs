module.exports = (app) => {
    const notes = require('../controller/note.controller.js');

    // Create note
    app.post('/api/note', notes.create);

    // Get All notes
    app.get('/api/note', notes.getAll);

    // Get note by Id 
    app.get('/api/note/:noteId', notes.getById);

    //Update note
    app.put('/api/note', notes.update);

    // Delete note By Id
    app.delete('/api/note/:noteId', notes.delete);
}