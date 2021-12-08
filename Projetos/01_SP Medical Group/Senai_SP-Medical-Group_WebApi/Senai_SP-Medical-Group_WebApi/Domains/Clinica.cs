using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Clinica
    {
        public byte IdClinica { get; set; }

        [Required(ErrorMessage ="Informe o nome da clínica")]
        public string NomeFantasia { get; set; }

        [Required(ErrorMessage = "Informe a razão social da clínica")]
        public string RazaoSocial { get; set; }

        [Required(ErrorMessage = "Informe o endereço da clínica")]
        public string Endereco { get; set; }

        [Required(ErrorMessage = "Informe o CNPJ da clínica")]
        public string Cnpj { get; set; }
    }
}
