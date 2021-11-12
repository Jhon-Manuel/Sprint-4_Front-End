using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface IConsultaRepository
    {
        List<Consulta> ListarTodos();

        Consulta BuscarPorId(int idConsulta);

        void Cadastrar(Consulta novaConsulta);

        void Atualizar(int idConsulta, Consulta novaConsulta);

        void Deletar(int idConsulta);
    }
}
