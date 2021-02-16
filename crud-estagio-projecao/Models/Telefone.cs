using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Models
{
    public class Telefone
    {
        public int TelefoneID { get; set; }
        public int ClienteID { get; set; }
        public Cliente Cliente { get; set; }
        public int ddd { get; set; }
        public int telefone { get; set; }

    }
}
