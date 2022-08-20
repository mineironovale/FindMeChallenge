import ListCustomerService from "../../services/customer/ListCustomerService";

const DeleteCustomerService = {
    delete: (id) => {
        const allCustomers = ListCustomerService.listAll();
        const customerIndex = allCustomers.findIndex(item => item.id === Number(id));

        if(customerIndex === -1) {
            return { erro: "Cliente não encontrado" }
        }

        allCustomers.splice(customerIndex, 1)
        return { mensagem: "Cliente removido com sucesso" }
    }
}

export default DeleteCustomerService;