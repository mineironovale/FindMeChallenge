import ListCustomerService from "./ListCustomerService";

const UpdateCustomerService = {
    update: (
        id,
        name
      ) => {
        const allCustomers = ListCustomerService.listAll();
        const customerIndex = allCustomers.findIndex(item => item.id === Number(id))
    
        if (customerIndex === -1) {
          return { erro: "Cliente não encontrado" }
        }
    
        allCustomers[customerIndex] = {
          name
        }
    
        return {
          id,
          name
        }
      }
};

export default UpdateCustomerService;