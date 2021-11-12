using Senai_SP_Medical_Group_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_SP_Medical_Group_WebApi.Interfaces
{
    interface IClinicaRepository
    {
        List<Clinica> ListarTodos();

        Clinica BuscarPorId(int idClinica);

        void Cadastrar(Clinica novaClinica);

        void Atualizar(int idClinica, Clinica clinicaAtualizado);

        void Deletar(int idClinica);
    }
}
