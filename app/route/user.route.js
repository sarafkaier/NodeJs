module.exports = (app) => {
    const users = require('../controller/user.controller.js');

    // Create user
    app.post('/api/user', users.create);

    // Get All users
    app.get('/api/user', users.getAll);

    // Get user by Id 
    app.get('/api/user/:userId', users.getById);

    //Update user
    app.put('/api/user', users.update);

    // Delete user By Id
    app.delete('/api/user/:userId', users.delete);
}