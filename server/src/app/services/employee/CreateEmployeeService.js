const { v4 } = require("uuid");
const EmployeeModel = require("../../models/employee/EmployeeModel");

const CreateEmployeeService = {
    create: (
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

        return {
            success: true,
            message: newEmployee
        };
    }
}

module.exports = CreateEmployeeService;