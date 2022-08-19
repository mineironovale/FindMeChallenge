const CustomerModel = require("../../models/customer/CustomerModel");
const { v4 } = require("uuid");

const CreateCustomerService = {
    create: (
        name
    ) => {
        const newCustomer = new CustomerModel(
            v4(),
            name
        );
        
        const arrCustomers = [];
        arrCustomers.push(newCustomer);
        return arrCustomers;
    }
}

module.exports = CreateCustomerService;