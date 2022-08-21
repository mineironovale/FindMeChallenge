import OrderModel from "../../models/order/OrderModel";

const ListOrderService = {
    listAll: () => {
        const order = new OrderModel(
            789,
            "01/01/2022",
            123,
            "Solicitação para troca de produto",
            456
        )

        return [order];
    },
    listId: (id) => {
        const allOrders = ListOrderService.listAll();
        const orderRequired = allOrders.find(item => item.id === id);
        return orderRequired;
    },
    listName: (date) => {
        const allOrders = ListOrderService.listAll();
        const orderRequired = allOrders.find(item => item.date === date);
        return orderRequired;
    },
    listName: (customerId) => {
        const allOrders = ListOrderService.listAll();
        const orderRequired = allOrders.find(item => item.customerId === customerId);
        return orderRequired;
    },
    listName: (employeeId) => {
        const allOrders = ListOrderService.listAll();
        const orderRequired = allOrders.find(item => item.employeeId === employeeId);
        return orderRequired;
    }
};

export default ListOrderService;