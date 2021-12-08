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
    public class ConsultaRepository: IConsultaRepository
    {
        InLockContext ctx = new InLockContext();
        
        public void Atualizar(int idConsulta, Consulta consultaAtualizado)
        {
            Consulta consultaBuscada = ctx.Consulta.Find(idConsulta);

            if(consultaAtualizado.IdPaciente > 0)
            {
                consultaBuscada.IdPaciente = consultaAtualizado.IdPaciente;
            }

            if (consultaAtualizado.IdMedico > 0)
            {
                consultaBuscada.IdMedico = consultaAtualizado.IdMedico;
            }

            if (consultaAtualizado.IdSituacao > 0)
            {
                consultaBuscada.IdSituacao = consultaAtualizado.IdSituacao;
            }

            if (consultaAtualizado.DataConsulta >= DateTime.Today)
            {
                consultaBuscada.DataConsulta = consultaAtualizado.DataConsulta;
            }

            ctx.Consulta.Update(consultaBuscada);

            ctx.SaveChanges();
        }

        
        public Consulta BuscarPorId(int idConsulta)
        {
            return ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);
        }

        public void Cadastrar(Consulta novaConsulta)
        {
            ctx.Consulta.Add(novaConsulta);

            ctx.SaveChanges();
        }

        public void Deletar(int idConsulta)
        {
            ctx.Consulta.Remove(BuscarPorId(idConsulta));

            ctx.SaveChanges();
        }

        public List<Consulta> ListarTodos()
        {
            return ctx.Consulta

                .Include(e => e.IdSituacaoNavigation)
                .Include(e => e.IdPacienteNavigation)
                .Include(e => e.IdMedicoNavigation)
                .ToList();
        }
    }
}
