using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Models
{
    public class Client
    {
        public int ClientID { get; set; }
        public string nameClient { get; set; }

        public List<Phone> Phones { get; set; }
    }
}
