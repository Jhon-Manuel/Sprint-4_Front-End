using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Medico
    {
        public Medico()
        {
            Consulta = new HashSet<Consulta>();
        }

        public byte IdMedico { get; set; }
        public short? IdUsuario { get; set; }
        public byte? IdEspecialidade { get; set; }

        [Required(ErrorMessage = "Informe o nome do médico")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe o CM do médico")]
        public string Cm { get; set; }

        public virtual Especialidade IdEspecialidadeNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Consulta> Consulta { get; set; }
    }
}
