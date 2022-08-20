import { v4 } from "uuid";
import EmployeeModel from "../../models/employee/EmployeeModel";

const CreateEmployeeService = {
    create: (
        id,
        name,
        email,
        password
    ) => {
        const newEmployee = new EmployeeModel(
            v4(),
            id,
            name,
            email,
            password
        );

        return {
            success: true,
            message: newEmployee
        };
    }
}

export default CreateEmployeeService;