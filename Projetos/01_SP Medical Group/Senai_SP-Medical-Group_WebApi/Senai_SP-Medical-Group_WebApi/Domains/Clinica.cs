using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Clinica
    {
        public byte IdClinica { get; set; }
        public string NomeFantasia { get; set; }
        public string RazaoSocial { get; set; }
        public string Endereco { get; set; }
        public string Cnpj { get; set; }
    }
}
