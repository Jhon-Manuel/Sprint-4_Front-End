using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_SP_Medical_Group_WebApi.Domains
{
    public partial class Consulta
    {
        public short IdConsulta { get; set; }
        public short? IdPaciente { get; set; }
        public byte? IdMedico { get; set; }
        public byte? IdSituacao { get; set; }
        public DateTime DataConsulta { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacao IdSituacaoNavigation { get; set; }
    }
}
