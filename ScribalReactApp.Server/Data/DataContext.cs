using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ScribalReactApp.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
 
        // Dodaj tutaj inne DbSety dla innych modeli

    }

}
