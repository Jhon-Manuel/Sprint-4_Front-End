using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface IUsuarioRepository
    {
        List<Usuario> ListarTodos();

        Usuario BuscarPorId(int idUsuarioo);

        void Cadastrar(Usuario novoUsuario);

        void Atualizar(int idUsuario, Usuario usuarioAtualizado);

        void Deletar(int idUsuario);
    }
}
