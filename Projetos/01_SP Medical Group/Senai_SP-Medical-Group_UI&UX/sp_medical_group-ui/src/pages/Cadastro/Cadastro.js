import {React, Component } from 'react';
import axios from 'axios';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome : '',
            dataNascimento : 0,
            rg : 0,
            cpf : 0,
            telefone : 0,
            localizacao : '',
            email : '',
            senha : '',

            listaEmails : [],
            isLoading : false,
        };
    }

    cadastrarUsuario = (usuario) => {
        usuario.preventDefault();
        this.setState({ isLoading : true});

        let user = {
            nome: this.state.nome,
            dataNascimento: this.state.dataNascimento,
            rg: this.state.rg,
            
        }
    }

    buscarEmail = () => {
        axios('http://localhost:5000/api/Email', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('')
            }
        })
    }

    componentDidMount(){

    }

    render(){
        return (
            <main>
                <section>
                    <h2>Cadastro de Usuario</h2>
                    <form onSubmit={this.cadastrarUsuario}>
                        <input 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.atualizaStateEmail}
                            placeholder="Email"
                        />
                        <input 
                            type="text"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.atualizaStateSenha}
                            placeholder="Senha"
                        />
                    </form>
                </section>
            </main>
        )
    }

}