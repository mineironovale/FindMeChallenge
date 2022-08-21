import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderCustomerId, setOrderCustomerId] = useState(0);
  const [orderDescription, setOrderDescription] = useState("");
  const [orderEmployeeId, setOrderEmployeeId] = useState(0);

  const [newCustomerName, setNewCustomerName] = useState([]);
  const [newEmployeeName, setnewEmployeeName] = useState([]);
  const [newEmployeeEmail, setnewEmployeeEmail] = useState([]);
  const [newEmployeePassword, setnewEmployeePassword] = useState([]);
  const [newOrderDate, setnewOrderDate] = useState([]);
  const [newOrderCustomerId, setnewOrderCustomerId] = useState(0);
  const [newOrderDescription, setNewOrderDescription] = useState([]);
  const [newOrderEmployeeId, setNewOrderEmployeeId] = useState(0);
  
  const [customerList, setCustomerList] = useState([]);
  const [employeeList, setEmployeeList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  return (
    <div className="App">
      <div>
        <h1>FindMe Challenge</h1>
      </div>
      <div className="register">
        <h2>Cadastro</h2>
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
      {/* <div className="search">
        <h2>Pesquisa</h2>
      </div> */}
    </div>
  );
}

export default App;
