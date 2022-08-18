const CustomerModel = require("../../models/customer/CustomerModel");
const { v4 } = require("uuid");

const CreateCustomerService = {
    createCustomer: (
        id,
        name
    ) => {
        const newCustomer = new CustomerModel(
            v4(),
            id,
            name
        );

        return newCustomer;
    }
}

module.exports = CreateCustomerService;