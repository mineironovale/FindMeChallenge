const CustomerModel = require("../../models/customer/CustomerModel");

const ListCustomerService = {
    listAll: () => {
        const customer = new CustomerModel(
            123,
            "João"
        )

        return [customer];
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