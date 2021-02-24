using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crud_estagio_projecao.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Client> Clients { get; set;  }
        public DbSet<Phone> Phones { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-MAD;Initial Catalog=dbHomologEstagio;Integrated Security=True" ) ;
        }

    }
}
