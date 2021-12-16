using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Consulta = new HashSet<Consulta>();
        }

        public byte IdSituacao { get; set; }

        [Required(ErrorMessage = "Informe a tipo de situação")]
        public string TipoSituacao { get; set; }

        public virtual ICollection<Consulta> Consulta { get; set; }
    }
}
