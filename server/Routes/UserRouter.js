const userRouter = require('express').Router();
const Users = require('../Controllers/UserController');

userRouter.get('/user',Users.getAll);
userRouter.post('/register',Users.register);
userRouter.post('/login',Users.login);
module.exports = userRouter;