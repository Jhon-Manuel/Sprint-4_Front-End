using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface IEspecialidadeRepository

    {
        List<Especialidade> ListarTodos();

        Especialidade BuscarPorId(int idEspecialidade);

        void Cadastrar(Especialidade novoEspecialidade);

        void Atualizar(int idEspecialidade, Especialidade especialidadeAtualizado);

        void Deletar(int idEspecialidade);
    }
}
