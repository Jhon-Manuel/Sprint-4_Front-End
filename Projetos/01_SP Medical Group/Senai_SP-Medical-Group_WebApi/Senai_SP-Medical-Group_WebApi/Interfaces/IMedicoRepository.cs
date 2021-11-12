using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface IMedicoRepository
    {
        List<Medico> ListarTodos();

        Medico BuscarPorId(int idMedico);

        void Cadastrar(Medico novoMedico);

        void Atualizar(int idMedico, Medico medicoAtualizado);

        void Deletar(int idMedico);
    }
}
