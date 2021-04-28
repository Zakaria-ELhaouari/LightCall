using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Extensions;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Persistence;

namespace API
{
    public class Startup
    {
        private readonly IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
            
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers(opt => {
               
            });

            services.AddApplicationServices(_config);
            services.AddIdentityServices(_config);
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            }

            
            

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");
            
            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

             
            CreateRoles(serviceProvider);
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
