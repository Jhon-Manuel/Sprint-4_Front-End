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

            if (especialidadeAtualizado.)
            {

            }
        }

        public Especialidade BuscarPorId(int idEspecialidade)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Especialidade novoEspecialidade)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idEspecialidade)
        {
            throw new NotImplementedException();
        }

        public List<Especialidade> ListarTodos()
        {
            throw new NotImplementedException();
        }
    }
}
