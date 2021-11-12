import './App.css';
import React from 'react';


function DataFormatada(props){
  return <h2>Horário de Brásilia : {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    };
  };

  thick(){
      this.setState({
        date : new Date()
      })
    }
  
  
  BotaoPausar(props){
      this.date  
  }

  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000 );

    console.log('Eu sou o relógio' + this.timerID)
  };

  componentWillUnmount(){
    clearInterval(this.timerID);
  };

  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button onClick> Pausar </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
