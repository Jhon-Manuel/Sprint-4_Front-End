using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface ITipoUsuarioRepository
    {
        List<Tipousuario> ListarTodos();

        Tipousuario BuscarPorId(int idTipoUsuario);

        void Cadastrar(Tipousuario novoTipoUsuario);

        void Atualizar(int idTipousuario, Tipousuario tipoUsuarioAtualizado);

        void Deletar(int idTipoUsuario);
    }
}
