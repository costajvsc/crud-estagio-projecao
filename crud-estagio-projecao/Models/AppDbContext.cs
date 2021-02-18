using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Cliente> Clientes { get; set;  }
        public DbSet<Telefone> Telefones { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-MAD;Initial Catalog=dbTestEstagio;Integrated Security=True" ) ;
        }

    }
}
