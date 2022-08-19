const CustomerModel = require("../../models/customer/CustomerModel");
const CreateCustomerService = require("../../services/customer/CreateCustomerService");

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

module.exports = ListCustomerService;