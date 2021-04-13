using System;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public class RolesOnStartup
    {
        private readonly IConfiguration _config;
        public RolesOnStartup(IConfiguration config)
        {
            _config = config;
        }



    private void CreateRoles(IServiceProvider serviceProvider)
    {

        var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = serviceProvider.GetRequiredService<UserManager<AppUser>>();
        Task<IdentityResult> roleResult;
        string[] roleNames = { "Admin", "Operator", "Member" };
        // string email = "someone@somewhere.com";


        foreach (var roleName in roleNames)
        {
            Task<bool> roleExist = roleManager.RoleExistsAsync(roleName);
            roleExist.Wait();
            if (!roleExist.Result)
            {
                //create the roles and seed them to the database: Question 2
                roleResult =  roleManager.CreateAsync(new IdentityRole(roleName));
                roleResult.Wait();
            }
        }


        Task<AppUser> testUser = userManager.FindByEmailAsync(_config["AdminEmail"]);
        testUser.Wait();

        if (testUser.Result == null)
        {
            AppUser administrator = new AppUser();
            administrator.Email = _config["AdminEmail"];
            administrator.UserName = _config["AdminUserName"];

            Task<IdentityResult> newUser = userManager.CreateAsync(administrator,  _config["AdminPassword"]);
            newUser.Wait();

            if (newUser.Result.Succeeded)
            {
                Task<IdentityResult> newUserRole = userManager.AddToRoleAsync(administrator, "Admin");
                newUserRole.Wait();
            }
        }

    }




    }
}