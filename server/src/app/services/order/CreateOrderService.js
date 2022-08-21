import { v4 } from "uuid";
import OrderModel from "../../models/order/OrderModel";

const CreateOrderService = {
  create: (
    id,
    date,
    customerId,
    description,
    employeeId
    ) => {
    const newOrder = new OrderModel(
        v4(),
        date,
        customerId,
        description,
        employeeId    
    );

    return {
      success: true,
      message: newOrder
    };
  },
};

export default CreateOrderService;