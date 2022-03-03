require('dotenv').config();
require('./DB/index');
const express = require('express');
const cors = require('cors');
const EmployeesRouter = require('./Routes/employeesRoter');
const UserRouter = require('./Routes/UserRouter');
const path = require('path');
const passport = require("passport");
const { dirname } = require('path');
require('./confing/Passport')(passport);
const App = express();
const port = process.env.PORT || 8000
App.use(cors());
App.use(express.json());
App.use(passport.initialize());
App.use('/api', UserRouter);
App.use('/employee', passport.authenticate("jwt", { session: false }), EmployeesRouter);

if (process.env.NODE_ENV === 'production') {
    App.use(express.static(path.join(__dirname, '../client/build')))
    App.get("*", (req, res) =>
        res.sendFile(path.join(__dirname, '../client/build', 'index.html')))
}
// App.get("/",(req,res)=>{
//     res.send('<h1>wellcome there;</h1>')
// })
App.listen(port);