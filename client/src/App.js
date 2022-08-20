import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>FindMe Challenge</h1>
      </div>
      <div className="register">
        <h2>Cadastro</h2>
        <h3>Cliente</h3>
        <label>Nome:</label>
        <input type="text" />
        <button>Adicionar cliente</button>

        <h3>Colaborador</h3>
        <label>Nome:</label>
        <input type="text" />
        <label>E-mail:</label>
        <input type="text" />
        <label>Senha:</label>
        <input type="text" />
        <button>Adicionar colaborador</button>

        <h3>Ordem de Serviço</h3>
        <label>Data de abertura:</label>
        <input type="date" />
        <label>Id do cliente:</label>
        <input type="number" />
        <label>Problema relatado:</label>
        <input type="text" />
        <label>Id do colaborador designado para o problema:</label>
        <input type="number" />
        <button>Adicionar Ordem de Serviço</button>
      </div>
      <div className="search">
        <h2>Pesquisa</h2>
      </div>
    </div>
  );
}

export default App;
