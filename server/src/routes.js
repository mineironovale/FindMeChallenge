import Router from "express";
const routes = new Router();

import customerController from "./app/controllers/customer/CustomerController";
import employeeController from "./app/controllers/employee/EmployeeController";
import orderController from "./app/controllers/order/OrderController"; 

routes.get("/customers", customerController.index);
routes.get("/customer/:id", customerController.ListId);
routes.post("/customer/create", customerController.create);
routes.put("/customer/update", customerController.update);
routes.delete("/customer/delete", customerController.delete);

routes.get("/employees", employeeController.index);
routes.get("/employee/:id", employeeController.ListId);
routes.post("/employee/create", employeeController.create);
routes.put("/employee/update", employeeController.update);
routes.delete("/employee/delete", employeeController.delete);

export default routes;