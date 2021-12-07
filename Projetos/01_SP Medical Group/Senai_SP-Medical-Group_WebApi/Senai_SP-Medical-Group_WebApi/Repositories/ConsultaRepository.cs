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

            if(consultaBuscada != null)
            {
                consultaBuscada = consultaAtualizado;
            }
        }

        public Consulta BuscarPorId(int idConsulta)
        {
            return ctx.Consulta.FirstOrDefault(c => c.IdConsulta == idConsulta);
        }

        public void Cadastrar(Consulta novaConsulta)
        {

        }

        public void Deletar(int idConsulta)
        {

        }

        public List<Consulta> ListarTodos()
        {

        }
    }
}
