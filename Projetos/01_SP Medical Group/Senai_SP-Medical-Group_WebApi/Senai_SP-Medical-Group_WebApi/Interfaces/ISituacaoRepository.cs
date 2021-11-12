using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface ISituacaoRepository
    {
        List<Situacao> ListarTodos();

        Situacao BuscarPorId(int idSituacao);

        void Cadastrar(Situacao novaSituacao);

        void Atualizar(int idSituacao, Situacao situacaoAtualizada);

        void Deletar(int idSituacao);
    }
}
