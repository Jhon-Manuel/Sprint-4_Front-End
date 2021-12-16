
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="boxContato">
          <div className="textBoxContato">
          +55 (11)88899-8888
          </div>
          <div className="textBoxContato">
            spmedicalgroup@spmedicalgroup.com.br
          </div>
        </div>
        <div className="boxUser">
          <div className="textBoxuser">
            Bem Vindo
            {this.state.listaUsuario.map(dado) => {
              return(
                <>
              );
            }}
          </div>
          <div className="imgBoxUser">

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
