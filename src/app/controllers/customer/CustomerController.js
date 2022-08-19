const CreateCustomerService = require('../../services/customer/CreateCustomerService');
const ListCustomerService = require('../../services/customer/ListCustomerService');
const UpdateCustomerService = require('../../services/customer/UpdateCustomerService');
const DeleteCustomerService = require('../../services/customer/DeleteCustomerService');

const customerController = {
  index: (request, response) => {
    const listedCustomers = ListCustomerService.listAll()
    response.json(listedCustomers)
  },
  ListId: (request, response) => {
    const { id } = request.query;

    if (!id) {
      return response.status(400).json({ "erro": "O ID do cliente não foi informado" })
    }

    const listedCustomer = ListCustomerService.listId(id);
    return response.json(listedCustomer)
  },
  ListName: (request, response) => {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ "erro": "O nome do cliente não foi informado" })
    }

    const listedCustomer = ListCustomerService.listName(name);
    return response.json(listedCustomer)
  },
  create: (request, response) => {
    const {
      name
    } = request.query;

    const createdCustomer = CreateCustomerService.create(name);
    return response.json(createdCustomer)
  },
  update: (request, response) => {
    const { id } = request.params
    const {
      name
    } = request.query;

    const updatedCustomer = UpdateCustomerService.update(
      id,
      name
    )

    response.json(updatedCustomer)
  },
  delete: (request, response) => {
    const { id } = request.params
    const deletedCustomer = DeleteCustomerService.delete(id)
    response.send(deletedCustomer)
  }
}

module.exports = customerController;