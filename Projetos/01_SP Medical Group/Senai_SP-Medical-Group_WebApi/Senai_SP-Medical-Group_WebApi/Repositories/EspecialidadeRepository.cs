using Senai_SP_Medical_Group_WebApi.Contexts;
using Senai_SP_Medical_Group_WebApi.Domains;
using Senai_SP_Medical_Group_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Repositories
{
    public class EspecialidadeRepository: IEspecialidadeRepository
    {
        InLockContext ctx = new InLockContext();

        public void Atualizar(int idEspecialidade, Especialidade especialidadeAtualizado)
        {
            Especialidade especialidadeBuscada = ctx.Especialidades.Find(idEspecialidade);

            if (especialidadeAtualizado.TipoEspecialidade != null)
            {
                especialidadeBuscada.TipoEspecialidade = especialidadeAtualizado.TipoEspecialidade; 
            }

            ctx.Especialidades.Update(especialidadeBuscada);

            ctx.SaveChanges();
        }

        public Especialidade BuscarPorId(int idEspecialidade)
        {
            return ctx.Especialidades.FirstOrDefault(e => e.IdEspecialidade == idEspecialidade);
        }

        public void Cadastrar(Especialidade novoEspecialidade)
        {
            ctx.Especialidades.Add(novoEspecialidade);

            ctx.SaveChanges();
        }

        public void Deletar(int idEspecialidade)
        {
            ctx.Especialidades.Remove(BuscarPorId(idEspecialidade));

            ctx.SaveChanges();
        }

        public List<Especialidade> ListarTodos()
        {
            return ctx.Especialidades.ToList();
        }
    }
}
