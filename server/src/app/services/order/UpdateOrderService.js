import ListOrderService from "./ListOrderService";

const UpdateOrderService = {
    update: (
        id,
        date,
        customerId,
        description,
        employeeId
      ) => {
        const allOrders = ListOrderService.listAll();
        const orderIndex = allOrders.findIndex(item => item.id === Number(id));
    
        if (orderIndex === -1) {
          return { erro: "Ordem de Serviço não encontrada" }
        }
    
        allOrders[orderIndex] = {
          date,
          customerId,
          description,
          employeeId
        }
    
        return {
          id,
          date,
          customerId,
          description,
          employeeId
        }
      }
};

export default UpdateOrderService;