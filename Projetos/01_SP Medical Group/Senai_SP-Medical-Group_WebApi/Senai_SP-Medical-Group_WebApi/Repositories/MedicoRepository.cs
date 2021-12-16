using Microsoft.EntityFrameworkCore;
using Senai_SP_Medical_Group_WebApi.Contexts;
using Senai_SP_Medical_Group_WebApi.Domains;
using Senai_SP_Medical_Group_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        InLockContext ctx = new InLockContext();

        public void Atualizar(int idMedico, Medico medicoAtualizado)
        {
            Medico medicoBuscado = ctx.Medicos.Find(idMedico);

            if (medicoAtualizado.Nome != null)
            {
                medicoBuscado.Nome = medicoAtualizado.Nome;
            }

            if (medicoAtualizado.Cm != null)
            {
                medicoBuscado.Cm = medicoAtualizado.Cm;
            }

            if (medicoAtualizado.IdEspecialidade > 0)
            {
                medicoBuscado.IdEspecialidade = medicoAtualizado.IdEspecialidade;
            }

            if (medicoAtualizado.IdUsuario > 0)
            {
                medicoBuscado.IdUsuario = medicoAtualizado.IdUsuario;
            }

            ctx.Medicos.Update(medicoBuscado);

            ctx.SaveChanges();
        }

        public Medico BuscarPorId(int idMedico)
        {
            return ctx.Medicos.FirstOrDefault(e => e.IdMedico == idMedico);
        }

        public void Cadastrar(Medico novoMedico)
        {
            ctx.Medicos.Add(novoMedico);

            ctx.SaveChanges();
        }

        public void Deletar(int idMedico)
        {
            ctx.Medicos.Remove(BuscarPorId(idMedico));

            ctx.SaveChanges();
        }

        public List<Medico> ListarTodos()
        {
            return ctx.Medicos
                .Include(e => e.IdEspecialidadeNavigation)
                .Include(e => e.IdUsuarioNavigation)
                .ToList();
        }
    }
}
