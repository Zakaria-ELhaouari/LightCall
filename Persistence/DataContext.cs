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
        public  DbSet<Shipping_Company> Shipping_Company { get; set; }
        public  DbSet<Products> Product { get; set; }
        public  DbSet<Orders> Order { get; set; }
        public  DbSet<Projects> Project { get; set; }
        public  DbSet<Upsell> Upsell { get; set; }
    }
}