const ListEmployeeService = require("../../services/employee/ListEmployeeService");

const UpdateEmployeeService = {
    update: (
        id,
        name,
        email,
        password
      ) => {
        const allEmployees = ListEmployeeService.listAll();
        const employeeIndex = allEmployees.findIndex(item => item.id === Number(id))
    
        if (employeeIndex === -1) {
          return { erro: "Colaborador não encontrado" }
        }
    
        allEmployees[employeeIndex] = {
          name,
          email,
          password
        }
    
        return {
          id,
          name,
          email,
          password
        }
      }
};

module.exports = UpdateEmployeeService;