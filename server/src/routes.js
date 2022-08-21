import Router from "express";
const routes = new Router();

const customerController = require("./app/controllers/customer/CustomerController");
const employeeController = require("./app/controllers/employee/EmployeeController");

// const customerValidator = require("./middlewares/customer/CustomerValidator");
// const employeeValidator = require("./middlewares/employee/EmployeeValidator");

routes.get("/customer", customerController.index);
routes.get("/customer", customerController.ListId);
routes.get("/customer", customerController.ListName);
routes.post("/customer", customerController.create);
routes.put("/customer", customerController.update);
routes.delete("/customer", customerController.delete);

routes.get("/employee", employeeController.index);
routes.get("/employee", employeeController.ListId);
routes.get("/employee", employeeController.ListName);
routes.get("/employee", employeeController.ListEmail);
routes.post("/employee/create", employeeController.create);
routes.put("/employee", employeeController.update);
routes.delete("/employee", employeeController.delete);

export default routes;