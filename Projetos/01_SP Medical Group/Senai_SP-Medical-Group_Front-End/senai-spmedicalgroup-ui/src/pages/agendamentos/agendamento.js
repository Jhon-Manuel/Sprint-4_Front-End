import { Component } from 'react';

export default class Agendamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaAgendamentos : [],
        }
    }

    

    buscarAgendamentos = () => {

        fetch('http://localhost/api/agendamento')

        .then( resposta => resposta.json())
        
        .then( dados => this.setState({ listaAgendamentos : dados}))

        .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarAgendamentos()
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h1>Agendamentos</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Procedimento
                                    </th>
                                    <th>
                                        Médico
                                    </th>
                                    <th>
                                        Data Procedimento
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaAgendamentos.map( (agendamento) => {
                                        return(
                                            <tr key= {agendamento.idConsulta}>
                                                <td>{agendamento.tipoEspecialdade}</td>
                                                <td>{agendamento.Nome}</td>
                                                <td>{agendamento.DataConsulta}</tr>
                                                <td>{agendamento.TipoSituacao}</td>
                                            </tr>
                            
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                </main>
            </div>
        )
    }

    renderItem(){
        
    }
}