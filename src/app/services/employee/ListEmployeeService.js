const EmployeeModel = require("../../models/employee/EmployeeModel");

const ListEmployeeService = {
    listAll: () => {
        const employee = new EmployeeModel(
            456,
            "Roberto",
            "roberto@empresa.com",
            "123abc**"
        )

        return [employee];
    },
    listId: (id) => {
        const allEmployees = ListEmployeeService.listAll();
        const employeeRequired = allEmployees.find(item => item.id === id);
        return employeeRequired;
    },
    listName: (name) => {
        const allEmployees = ListEmployeeService.listAll();
        const employeeRequired = allEmployees.find(item => item.name === name);
        return employeeRequired;
    },
    listEmail: (email) => {
        const allEmployees = ListEmployeeService.listAll();
        const employeeRequired = allEmployees.find(item => item.email === email);
        return employeeRequired;
    }
};

module.exports = ListEmployeeService;