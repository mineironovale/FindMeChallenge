import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  // Customer
  const [customerName, setCustomerName] = useState("");
  const [newCustomerName, setNewCustomerName] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  // Employee
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [newEmployeeName, setNewEmployeeName] = useState([]);
  const [newEmployeeEmail, setNewEmployeeEmail] = useState([]);
  const [newEmployeePassword, setNewEmployeePassword] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  // Order
  const [orderDate, setOrderDate] = useState("");
  const [orderCustomerId, setOrderCustomerId] = useState(0);
  const [orderDescription, setOrderDescription] = useState("");
  const [orderEmployeeId, setOrderEmployeeId] = useState(0);
  const [newOrderDate, setNewOrderDate] = useState([]);
  const [newOrderCustomerId, setNewOrderCustomerId] = useState(0);
  const [newOrderDescription, setNewOrderDescription] = useState([]);
  const [newOrderEmployeeId, setNewOrderEmployeeId] = useState(0);
  const [orderList, setOrderList] = useState([]);

  // Customer
  const addCustomer = () => {
    Axios.post("http://localhost:3001/customer/create", {
      name: customerName,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: customerName
        },
      ]);
    });
  };
  const getCustomers = () => {
    Axios.get("http://localhost:3001/customers").then((response) => {
      setCustomerList(response.data);
    });
  };
  const updateCustomer = (id) => {
    Axios.put("http://localhost:3001/customer/update", {
      name: newCustomerName,
      id: id
    }).then((response) => {
      setCustomerList(
        customerList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                name: val.newCustomerName
              }
            : val;
        })
      );
    });
  };
  const deleteCustomer = (id) => {
    Axios.delete(`http://localhost:3001/customer/delete/${id}`).then(
      (response) => {
        setCustomerList(
          customerList.filter((val) => {
            return val.id != id;
          })
        );
      }
    );
  };
  // Employee
  const addEmployee = () => {
    Axios.post("http://localhost:3001/employee/create", {
      name: employeeName,
      email: employeeEmail,
      password: employeePassword,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: employeeName,
          email: employeeEmail,
          password: employeePassword,
        },
      ]);
    });
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  const updateEmployee = (id) => {
    Axios.put("http://localhost:3001/employee/update", {
      name: newEmployeeName,
      email: newEmployeeEmail,
      password: newEmployeePassword,
      id: id
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                name: val.newEmployeeName,
                email: val.newEmployeeEmail,
                password: val.newEmployeePassword,
              }
            : val;
        })
      );
    });
  };
  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/employee/delete/${id}`).then(
      (response) => {
        setEmployeeList(
          employeeList.filter((val) => {
            return val.id != id;
          })
        );
      }
    );
  };
  // Order
  const addOrder = () => {
    Axios.post("http://localhost:3001/order/create", {
      date: orderDate,
      customerId: orderCustomerId,
      description: orderDescription,
      employeeId: orderEmployeeId,
    }).then(() => {
      setOrderList([
        ...orderList,
        {
          date: orderDate,
          customerId: orderCustomerId,
          description: orderDescription,
          employeeId: orderEmployeeId
        },
      ]);
    });
  };
  const getOrders = () => {
    Axios.get("http://localhost:3001/orders").then((response) => {
      setOrderList(response.data);
    });
  };
  const updateOrder = (id) => {
    Axios.put("http://localhost:3001/order/update", {
      name: newOrderDate,
      customerId: newOrderCustomerId,
      description: newOrderDescription,
      employeeId: newOrderEmployeeId,
      id: id
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                date: newOrderDate,
                customerId: newOrderCustomerId,
                description: newOrderDescription,
                employeeId: newOrderEmployeeId
              }
            : val;
        })
      );
    });
  };
  const deleteOrder = (id) => {
    Axios.delete(`http://localhost:3001/order/delete/${id}`).then(
      (response) => {
        setOrderList(
          orderList.filter((val) => {
            return val.id != id;
          })
        );
      }
    );
  };

  return (
    <div className="App">
      <div className="register">
        <h1>FindMe Challenge</h1>
        <h2 className="menuItem">Cadastro</h2>
        <h3>Cliente</h3>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setCustomerName(event.target.value);
          }}
        />
        <button>Adicionar cliente</button>

        <h3>Colaborador</h3>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmployeeName(event.target.value);
          }}
        />
        <label>E-mail:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmployeeEmail(event.target.value);
          }}
        />
        <label>Senha:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmployeePassword(event.target.value);
          }}
        />
        <button>Adicionar colaborador</button>

        <h3>Ordem de Serviço</h3>
        <label>Data de abertura:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrderDate(event.target.value);
          }}
        />
        <label>Id do cliente:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrderCustomerId(event.target.value);
          }}
        />
        <label>Problema relatado:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrderDescription(event.target.value);
          }}
        />
        <label>Id do colaborador designado para o problema:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrderEmployeeId(event.target.value);
          }}
        />
        <button>Adicionar Ordem de Serviço</button>
      </div>
      <div className="search">
        <h2 className="menuItem">Pesquisa</h2>

        <h3>Cliente</h3>
        <label>ID do cliente:</label>
        <input
          type="text"
          onChange={(event) => {
            setCustomerList(event.target.value);
          }}
        />
        <button>Pesquisar cliente por ID</button>

        <h3>Colaborador</h3>
        <label>ID do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmployeeList(event.target.value);
          }}
        />
        <button>Pesquisar colaborador por ID</button>

        <h3>Ordem de Serviço</h3>
        <label>ID da Ordem de Serviço:</label>
        <input
          type="text"
          onChange={(event) => {
            setOrderList(event.target.value);
          }}
        />
        <button>Pesquisar Ordem de Serviço por ID</button>
      </div>
      <div className="update">
        <h2 className="menuItem">Atualização</h2>

        <h3>Cliente</h3>
        <label>ID do cliente:</label>
        <input
          type="text"
          onChange={(event) => {
            setCustomerList(event.target.value);
          }}
        />
        <label>Nome do cliente:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewCustomerName(event.target.value);
          }}
        />
        <button>Atualizar cliente</button>

        <h3>Colaborador</h3>
        <label>ID do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            employeeList(event.target.value);
          }}
        />
        <label>Nome do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewEmployeeName(event.target.value);
          }}
        />
        <label>E-mail do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewEmployeeEmail(event.target.value);
          }}
        />
        <label>Senha do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewEmployeePassword(event.target.value);
          }}
        />
        <button>Atualizar colaborador</button>

        <h3>Ordem de Serviço</h3>
        <label>ID da Ordem de Serviço:</label>
        <input
          type="text"
          onChange={(event) => {
            orderList(event.target.value);
          }}
        />
        <label>Data:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewOrderDate(event.target.value);
          }}
        />
        <label>ID do cliente:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewOrderCustomerId(event.target.value);
          }}
        />
        <label>Descrição:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewOrderDescription(event.target.value);
          }}
        />
        <label>ID do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewOrderEmployeeId(event.target.value);
          }}
        />
        <button>Atualizar Ordem de Serviço</button>
      </div>
      <div className="delete">
        <h2 className="menuItem">Exclusão</h2>

        <h3>Cliente</h3>
        <label>ID do cliente:</label>
        <input
          type="text"
          onChange={(event) => {
            setCustomerList(event.target.value);
          }}
        />
        <button>Excluir cliente</button>

        <h3>Colaborador</h3>
        <label>ID do colaborador:</label>
        <input
          type="text"
          onChange={(event) => {
            employeeList(event.target.value);
          }}
        />
        <button>Excluir colaborador</button>

        <h3>Ordem de Serviço</h3>
        <label>ID da Ordem de Serviço:</label>
        <input
          type="text"
          onChange={(event) => {
            orderList(event.target.value);
          }}
        />
        <button>Excluir Ordem de Serviço</button>
      </div>
    </div>
  );
}

export default App;