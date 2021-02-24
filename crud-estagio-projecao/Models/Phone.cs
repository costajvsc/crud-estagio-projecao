using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Models
{
    public class Phone
    {
        public int PhoneID { get; set; }
        public int ClientID { get; set; }
        [JsonIgnore]
        public Client Client { get; set; }
        public int ddd { get; set; }
        public int phoneNumber { get; set; }

    }
}
