import CreateOrderService from '../../services/order/CreateOrderService';
import ListOrderService from '../../services/order/ListOrderService';
import UpdateOrderService from '../../services/order/ListOrderService';
import DeleteOrderService from '../../services/order/DeleteOrderService';

const orderController = {
  index: (request, response) => {
    const listedOrders = ListOrderService.listAll()
    response.json(listedOrders)
  },
  ListId: (request, response) => {
    const { id } = request.query;

    if (!id) {
      return response.status(400).json({ "erro": "O ID da ordem de serviço não foi informado" })
    }

    const listedOrder = ListOrderService.listId(id);
    return response.json(listedOrder);
  },
  create: (request, response) => {
    const {
        date,
        customerId,
        description,
        employeeId
    } = request.body;

    if(!date) {
        return response.status(400).json({
            message: "Obrigatório inserir uma data válida"
        })
    }

    if(!customerId) {
        return response.status(400).json({
            message: "Obrigatório inserir um ID de cliente válido"
        })
    }

    if(!description) {
        return response.status(400).json({
            message: "Obrigatório fornecer uma descrição válida"
        })
    }

    if(!employeeId) {
        return response.status(400).json({
            message: "Obrigatório fornecer um ID de colaborador válido"
        })
    }

    const createdOrder = CreateOrderService.create(date, customerId, description, employeeId);
    
    if(!createdEmployee.success) {
        return response.status(400).json(createdOrder.message)
    }
    
    return response.status(200).json(createdOrder.message)
  },
  update: (request, response) => {
    const { id } = request.params
    const {
      date,
      customerId,
      description,
      employeeId
    } = request.body;

    if(!date) {
        return response.status(400).json({
            message: "Obrigatório inserir uma data válida"
        })
    }

    if(!customerId) {
        return response.status(400).json({
            message: "Obrigatório inserir um ID de cliente válido"
        })
    }

    if(!description) {
        return response.status(400).json({
            message: "Obrigatório fornecer uma descrição válida"
        })
    }

    if(!employeeId) {
        return response.status(400).json({
            message: "Obrigatório fornecer um ID de colaborador válido"
        })
    }

    const updatedOrder = UpdateOrderService.update(id, date, customerId, description, employeeId);

    if(!updatedOrder.success) {
        return response.status(400).json(updatedOrder.message);
    }

    return response.status(200).json(updatedOrder.message);
  },
  delete: (request, response) => {
    const { id } = request.params
    const deletedOrder = DeleteOrderService.delete(id)
    response.send(deletedOrder)
  }
}

export default orderController;