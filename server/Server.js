require('dotenv').config();
require('./DB/index');
const express = require('express');
const cors = require('cors');
const EmployeesRouter = require('./Routes/employeesRoter');
const App = express();
const port = process.env.PORT || 8000
App.use(cors());
App.use(express.json());
App.use('/api',EmployeesRouter);

App.get("/",(req,res)=>{
    res.send('<h1>wellcome there;</h1>')
})
App.listen(port);