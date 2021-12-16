using Senai_SP_Medical_Group_WebApi.Contexts;
using Senai_SP_Medical_Group_WebApi.Domains;
using Senai_SP_Medical_Group_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Repositories
{
    public class SituacaoRepository : ISituacaoRepository
    {
        InLockContext ctx = new InLockContext();

        public void Atualizar(int idSituacao, Situacao situacaoAtualizada)
        {
            Situacao situacaoBuscada = ctx.Situacaos.Find(idSituacao);

            if (situacaoAtualizada.TipoSituacao != null)
            {
                situacaoBuscada.TipoSituacao = situacaoAtualizada.TipoSituacao;
            }

            ctx.Situacaos.Update(situacaoBuscada);

            ctx.SaveChanges();
        }

        public Situacao BuscarPorId(int idSituacao)
        {
            return ctx.Situacaos.FirstOrDefault(e => e.IdSituacao == idSituacao);
        }

        public void Cadastrar(Situacao novaSituacao)
        {
            ctx.Situacaos.Add(novaSituacao);

            ctx.SaveChanges();
        }

        public void Deletar(int idSituacao)
        {
            ctx.Situacaos.Remove(BuscarPorId(idSituacao));

            ctx.SaveChanges();
        }

        public List<Situacao> ListarTodos()
        {
            return ctx.Situacaos.ToList();
        }
    }
}
