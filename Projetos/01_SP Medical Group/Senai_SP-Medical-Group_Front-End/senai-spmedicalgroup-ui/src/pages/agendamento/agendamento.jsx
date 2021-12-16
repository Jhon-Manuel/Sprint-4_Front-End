import { Component } from "react";

export default class Agendamento extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaEspecialidade : [],
            listaSubEspecialidade : [],
            listaMedico : [],
            bool : true,
            dataConsulta : '',
        };
    }

    listaEspecialidade = () => {
        fetch('http://localhost:5000/api/Especialidade')

        .then(dadosLista => dadosLista.json())

        .then( dados => this.setState({ listaEspecialidade : dados}))

        .catch(erro => console.log(erro))
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <main>
                    <section>

                    </section>
                </main>
            </div>
        );
    }
   
}