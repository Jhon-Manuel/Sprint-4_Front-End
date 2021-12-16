using Senai_SP_Medical_Group_WebApi.Contexts;
using Senai_SP_Medical_Group_WebApi.Domains;
using Senai_SP_Medical_Group_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        InLockContext ctx = new InLockContext();

        public void Atualizar(int idTipousuario, Tipousuario tipoUsuarioAtualizado)
        {
            Tipousuario tipoBuscado = ctx.Tipousuarios.Find(idTipousuario);

            if (tipoUsuarioAtualizado.TipoUsuario != null)
            {
                tipoBuscado.TipoUsuario = tipoUsuarioAtualizado.TipoUsuario;
            }

            ctx.Tipousuarios.Update(tipoBuscado);

            ctx.SaveChanges();
        }

        public Tipousuario BuscarPorId(int idTipoUsuario)
        {
            return ctx.Tipousuarios.FirstOrDefault(e => e.IdTipoUsuario == idTipoUsuario);
        }

        public void Cadastrar(Tipousuario novoTipoUsuario)
        {
            ctx.Tipousuarios.Add(novoTipoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int idTipoUsuario)
        {
            ctx.Tipousuarios.Remove(BuscarPorId(idTipoUsuario));

            ctx.SaveChanges();
        }

        public List<Tipousuario> ListarTodos()
        {
            return ctx.Tipousuarios.ToList();
        }
    }
}
