import CreateEmployeeService from '../../services/employee/CreateEmployeeService';
import ListEmployeeService from '../../services/employee/ListEmployeeService';
import UpdateEmployeeService from '../../services/employee/UpdateEmployeeService';
import DeleteEmployeeService from '../../services/employee/DeleteEmployeeService';

const employeeController = {
  index: (request, response) => {
    const listedEmployees = ListEmployeeService.listAll()
    response.json(listedEmployees)
  },
  ListId: (request, response) => {
    const { id } = request.query;

    if (!id) {
      return response.status(400).json({ "erro": "O ID do cliente não foi informado" })
    }

    const listedEmployee = ListEmployeeService.listId(id);
    return response.json(listedEmployee)
  },
  ListName: (request, response) => {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ "erro": "O nome do cliente não foi informado" })
    }

    const listedEmployee = ListEmployeeService.listName(name);
    return response.json(listedEmployee)
  },
  ListEmail: (request, response) => {
    const { email } = request.query;

    if (!email) {
      return response.status(400).json({ "erro": "O email do cliente não foi informado" })
    }

    const listedEmployee = ListEmployeeService.listEmail(email);
    return response.json(listedEmployee)
  },
  create: (request, response) => {
    const {
      name,
      email,
      password
    } = request.body;

    if(!name) {
        return response.status(400).json({
            message: "Obrigatório inserir um nome válido"
        })
    }

    if(!email) {
        return response.status(400).json({
            message: "Obrigatório inserir um endereço de email válido"
        })
    }

    if(!password) {
        return response.status(400).json({
            message: "Obrigatório fornecer uma senha válida"
        })
    }

    const createdEmployee = CreateEmployeeService.create(name, email, password);
    
    if(!createdEmployee.success) {
        return response.status(400).json(createdEmployee.message)
    }
    
    return response.status(200).json(createdEmployee.message)
  },
  update: (request, response) => {
    const { id } = request.params
    const {
      name,
      email,
      password
    } = request.body;

    if(!name) {
        return response.status(400).json({
            message: "Obrigatório inserir um nome válido"
        })
    }

    if(!email) {
        return response.status(400).json({
            message: "Obrigatório inserir um endereço de email válido"
        })
    }

    if(!password) {
        return response.status(400).json({
            message: "Obrigatório fornecer uma senha válida"
        })
    }

    const updatedEmployee = UpdateEmployeeService.update(id, name, email, password);

    if(!updatedEmployee.success) {
        return response.status(400).json(updatedEmployee.message)
    }

    return response.status(200).json(updatedEmployee.message)
  },
  delete: (request, response) => {
    const { id } = request.params
    const deletedEmployee = DeleteEmployeeService.delete(id)
    response.send(deletedEmployee)
  }
}

export default employeeController;