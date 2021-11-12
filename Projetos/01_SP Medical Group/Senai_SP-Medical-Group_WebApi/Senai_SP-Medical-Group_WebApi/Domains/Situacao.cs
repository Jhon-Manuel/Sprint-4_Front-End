using System;
using System.Collections.Generic;

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
        public string TipoSituacao { get; set; }

        public virtual ICollection<Consulta> Consulta { get; set; }
    }
}
