using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Paciente
    {
        public Paciente()
        {
            Consulta = new HashSet<Consulta>();
        }

        public short IdPaciente { get; set; }
        public short? IdUsuario { get; set; }

        [Required(ErrorMessage = "Informe o nome do paciente")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe a data de nascimento do paciente")]
        public string DataNascimento { get; set; }

        [Required(ErrorMessage = "Informe o telefone do paciente")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "Informe o RG do paciente")]
        public string Rg { get; set; }

        [Required(ErrorMessage = "Informe o CPF do paciente")]
        public string Cpf { get; set; }

        [Required(ErrorMessage = "Informe o endereço do paciente")]
        public string Endereco { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consulta> Consulta { get; set; }
    }
}
