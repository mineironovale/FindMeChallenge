import CustomerModel from "../../models/customer/CustomerModel";
import CreateCustomerService from "../../services/customer/CreateCustomerService";

const ListCustomerService = {
    listAll: () => {
        return arrCustomers;
    },
    listId: (id) => {
        const allCustomers = ListCustomerService.listAll();
        const customerRequired = allCustomers.find(item => item.id === id);
        return customerRequired;
    },
    listName: (name) => {
        const allCustomers = ListCustomerService.listAll();
        const customerRequired = allCustomers.find(item => item.name === name);
        return customerRequired;
    }
};

export default ListCustomerService;