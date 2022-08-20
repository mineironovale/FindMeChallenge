import CustomerModel from "../../models/customer/CustomerModel";
import { v4 } from "uuid";

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

export default CreateCustomerService;