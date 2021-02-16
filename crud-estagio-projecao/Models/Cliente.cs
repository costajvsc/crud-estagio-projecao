using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Models
{
    public class Cliente
    {
        public int ClienteID { get; set; }
        public string nome { get; set; }

        public List<Telefone> Telefones { get; set; }
    }
}
