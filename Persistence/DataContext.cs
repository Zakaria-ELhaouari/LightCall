using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
 public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public  DbSet<OperatorAcc> OperatoreAccount { get; set; }
        public  DbSet<Cities> Cities { get; set; }
        
        public DbSet<Status> Status { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Confirmation> Confirmation { get; set; }

        public  DbSet<Shipping_Company> Shipping_Company { get; set; }
    }
}