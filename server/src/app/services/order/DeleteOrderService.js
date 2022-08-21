import ListOrderService from "../../services/order/ListOrderService";

const DeleteOrderService = {
    delete: (id) => {
        const allOrders = ListOrderService.listAll();
        const orderIndex = allOrders.findIndex(item => item.id === Number(id));

        if(orderIndex === -1) {
            return { erro: "Ordem de Serviço não encontrada" }
        }

        allOrders.splice(orderIndex, 1)
        return { mensagem: "Ordem de Serviço removida com sucesso" }
    }
};

export default DeleteOrderService;