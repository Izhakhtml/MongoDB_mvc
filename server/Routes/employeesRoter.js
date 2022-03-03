const EmployeesRouter = require('express').Router();
const AllMethodes = require('../Controllers/employessController');
EmployeesRouter.get("/",AllMethodes.GetAll);
EmployeesRouter.get("/:id",AllMethodes.GetById);
EmployeesRouter.post("/",AllMethodes.Create);
EmployeesRouter.put("/:id",AllMethodes.Update);
EmployeesRouter.delete("/:id",AllMethodes.Delete);
module.exports = EmployeesRouter;