using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {

        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any()){
                var users = new List<AppUser> {
                    new AppUser{FirstName = "Med", LastName = "Med", UserName = "Mouiguina", Email = "med@gmail.com", SkypeId = "9746j984938" },
                    new AppUser{FirstName = "Ned", LastName = "Ned", UserName = "Neeed", Email = "Ned@gmail.com", SkypeId = "97456984938" },
                    new AppUser{FirstName = "John", LastName = "Snow", UserName = "Mddded", Email = "JohnSnow@gmail.com", SkypeId = "974b6454938" },


                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                    await userManager.AddToRoleAsync(user, "Member");
                }
            }

            // if(!roleManager.Roles.Any()){

            //     var Roles = new List<Roles>{
            //         new Roles{roleName = "Admin"},
            //         new Roles{roleName = "User"}
            //     };
            //     foreach (var role in Roles)
            //     {
            //         await roleManager.CreateAsync(role);
            //     }
                
            // }
            // await roleManager.CreateAsync(new IdentityRole(Roles.Admin.ToString()));
            
            if(context.Cities.Any()) return;
             
             var Citiess = new List<City>
             {
                 new City
                 {
                     CityName = "London",
                     ZipCode = "8378",
                     Shipping_Companies = new List<Shipping_Company>{
                         new Shipping_Company {
                             Name = "Ozzon",
                             ApiClient = "dhj78hj"
                         },
                        new Shipping_Company {
                             Name = "Ozzon",
                             ApiClient = "dhj78hj"
                         }
                     }
                 }
             };

            await context.Cities.AddRangeAsync(Citiess);
            await context.SaveChangesAsync();
        }
    }
}