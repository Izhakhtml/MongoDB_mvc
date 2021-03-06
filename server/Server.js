require('dotenv').config();
require('./DB/index');
const express = require('express');
const cors = require('cors');
const EmployeesRouter = require('./Routes/employeesRoter');
const UserRouter = require('./Routes/UserRouter');
const passport = require("passport")
require('./confing/Passport')(passport);
const App = express();
const port = process.env.PORT || 8000
App.use(cors());
App.use(express.json());
App.use(passport.initialize());
App.use('/api',UserRouter);
App.use('/employee',passport.authenticate("jwt",{session:false}),EmployeesRouter);


// App.get("/",(req,res)=>{
//     res.send('<h1>wellcome there;</h1>')
// })
App.listen(port);