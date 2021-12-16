import { Component } from 'react';

export default class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaAgendamentos : [],
        }
    }

    componentDidMount(){

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
                        </table>
                        
                    </section>
                </main>
            </div>
        )
    }

    renderItem(){
        
    }
}