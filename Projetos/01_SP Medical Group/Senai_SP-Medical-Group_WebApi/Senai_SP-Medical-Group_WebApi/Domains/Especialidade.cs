using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Especialidade
    {
        public Especialidade()
        {
            Medicos = new HashSet<Medico>();
        }

        public byte IdEspecialidade { get; set; }
        public string TipoEspecialidade { get; set; }

        public virtual ICollection<Medico> Medicos { get; set; }
    }
}
