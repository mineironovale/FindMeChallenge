const EmployeeModel = require("../../models/employee/EmployeeModel");
const { v4 } = require("uuid");

const CreateEmployeeService = {
    createEmployee: (
        id,
        name,
        email,
        password
    ) => {
        const newEmployee = new EmployeeModel(
            v4(),
            id,
            name,
            email,
            password
        );

        return newEmployee;
    }
}

module.exports = CreateEmployeeService;