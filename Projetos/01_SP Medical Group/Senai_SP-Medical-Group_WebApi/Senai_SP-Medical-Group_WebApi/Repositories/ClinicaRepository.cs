using Senai_SP_Medical_Group_WebApi.Contexts;
using Senai_SP_Medical_Group_WebApi.Domains;
using Senai_SP_Medical_Group_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Repositories
{
    public class ClinicaRepository : IClinicaRepository
    {
        InLockContext ctx = new InLockContext();

        public void Atualizar(int idClinica, Clinica clinicaAtualizado)
        {
            Clinica clinicaBuscada = ctx.Clinicas.Find(idClinica);

            if(clinicaBuscada.NomeFantasia != null)
            {
                clinicaBuscada.NomeFantasia = clinicaAtualizado.NomeFantasia;
            }
        }

        public Clinica BuscarPorId(int idClinica)
        {
            return ctx.Clinicas.FirstOrDefault(c => c.IdClinica == idClinica);
        }

        public void Cadastrar(Clinica novaClinica)
        {
            ctx.Clinicas.Add(novaClinica);
            ctx.SaveChanges();
        }

        public void Deletar(int idClinica)
        {
            Clinica clinicaBuscado = BuscarPorId(idClinica);

            ctx.Clinicas.Remove(clinicaBuscado);

            ctx.SaveChanges();
        }

        public List<Clinica> ListarTodos()
        {
            return ctx.Clinicas.ToList();
        }
    }
}
