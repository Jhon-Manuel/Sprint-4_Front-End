import { Component } from 'react';

class TiposEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaTiposEventos : [],
            titulo : '',
            idTipoEventoAlterado : 0
        };
    };

    buscarTipoEventos = () => {
        console.log("Agora vamos fazer a chamada para a API")
        
        //Informamos o End Point.
        fetch('http://localhost:5000/api/TipoEventos') //Nessa linha enviamos uma requisão que por padrão será GET
        
        //Que obrigatoriamente retorna algo, disso pegamos essa resposta e deixamos em formato JSON

        //Define o tipo de dados do retorno da aplicação como JSON
        .then( resposta => resposta.json() )

        //Atualizamos o states listaTiposEventos com os dados obtidos
        .then( dados => this.setState({ listaTiposEventos: dados }))

        //caso ocorra algum erro, mostrar no console do computador
        .catch(erro => console.log(erro))

        ///O THEN (ENTAO) E UM METODO QUE EXECUTA AÇÕES DEPOIS QUE O METODO ANTES DELE FOR CONCLUIDO, SEGUINDO ASSIM UMA ORDEM EM CADEIA NATIVO DO API FETCH
    }  
    
    //onChange vai disparar, por tecla , e invocar essa função
    atualizaEstadoTitulo = async (evento) => {
        await this.setState({titulo : evento.target.value})
        console.log(this.state.titulo)
    }

    cadastrarTipoEvento = (evento) => {
        //ignor o comportament padrão do navegador
        evento.preventDefault();

        if (this.state.idTipoEventoAlterado !== 0) {
            //Segue para o processo de atualização
            fetch('http://localhost:5000/api/tiposeventos/' + this.state.idTipoEventoAlterado, {
                method : 'PUT',
                body : JSON.stringify({ tituloTipoEvento : this.state.titulo }),
                headers : {
                    "Content-type" : "application/json"
                }
            })

            .then(resposta => {
                if (resposta.status === 204) {
                    console.log(
                        'O Tipo de Evento' +  this.state.idTipoEventoAlterado + 'foi atualizado',
                        'Seu novo titulo agora é :' + this.state.titulo
                    )
                }
            })
        }

        else{
            fetch('http://localhost:5000/api/TipoEventos', {
            method: 'POST',
            //body: { tituloTipoEvento = this.state.titulo }, //Lembrando que aqui é objeto js, e nao json
            body:  JSON.stringify({ tituloTipoEvento : this.state.titulo }),
            headers:{ "Content-Type" :"application/json"}})

            .then( console.log("Tipo de evento cadastro"))

            .catch(erro => console.log(erro))

            //entao, atualiza a lista de tipos eventos.
            .then(this.buscarTipoEventos)

            .then(this.setState({ titulo: ''}))
        }
    }
    
    // Recebe um tipo de evento da lista
    buscarTipoEventoPorId = (tipoEvento) => {
         this.setState({ 
            // Atualiza o state idTipoEventoAlterado com o valor do ID do Tipo de Evento recebido
            idTipoEventoAlterado : tipoEvento.idTipoEvento,
            // e o state titulo com o valor do titulo do Tipo de Evento recebido
            titulo : tipoEvento.tituloTipoEvento
         }, () => {
             console.log(
                 'O tipo de Evento' + tipoEvento.idTipoEvento + 'foi selecionado,' +
                 'agora o valor do state idTipoEventoAlterado é: ' + this.state.idTipoEventoAlterado +
                 'e o valor do state titulo é: ' + this.state.titulo
             )
         })
    }
     

    componentDidMount(){
        this.buscarTipoEventos()
      };

    render(){
        return(
            // JSX
            <div>
                <main>
                    {/* Lista de tipos de eventos */}
                    <section>
                        <h2>Lista de tipos de eventos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Título</th>
                                    <th>Ações</th>
                                </tr>                                
                            </thead>

                            <tbody>
                                {
                                    this.state.listaTiposEventos.map((tipoEvento) => {
                                        return(
                                            <tr key={tipoEvento.idTipoEvento}>
                                                <td>{tipoEvento.idTipoEvento}</td>
                                                <td>{tipoEvento.tituloTipoEvento}</td>

                                                {/* Faz a chamada da função buscarTipoEventoPorId passando o Tipo de Evento selecionado como parâmetro */}
                                                <td><button onClick={() => this.buscarTipoEventoPorId(tipoEvento)}>Editar</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                            <h2>
                                Cadastro de Tipos de Eventos
                            </h2>
                            <form onSubmit={this.cadastrarTipoEvento}>
                                <div>
                                    <input type="text"

                                    //atualiza o tipo de input
                                    //valor do states e do input
                                     value={this.titulo}

                                     placeholder="Titulo do Tipo de Evento"
                                     
                                     //cada vez que tiver uma mudança ele atualiza (por tecla)
                                     onChange={this.atualizaestadoTitulo}
                                     />
                                     {/* quando clicar em cadastar ele ira submeter o formulario */}
                                    <button type="submit" >Cadastrar</button>
                                </div>
                            </form>
                    </section>

                    {/* Cadastro de tipos de eventos */}
                </main>
            </div>
        )
    }
};

export default TiposEventos