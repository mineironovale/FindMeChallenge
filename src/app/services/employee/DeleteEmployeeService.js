const ListEmployeeService = require("../../services/employee/ListEmployeeService");

const DeleteEmployeeService = {
    delete: (id) => {
        const allEmployees = ListEmployeeService.listAll();
        const employeeIndex = allEmployees.findIndex(item => item.id === Number(id));

        if(employeeIndex === -1) {
            return { erro: "Colaborador não encontrado" }
        }

        allEmployees.splice(employeeIndex, 1)
        return { mensagem: "Colaborador removido com sucesso" }
    }
}

module.exports = DeleteEmployeeService;