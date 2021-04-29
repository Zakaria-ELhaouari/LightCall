using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Application.UpSell;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class UpsellController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly UserManager<AppUser> _userManager;

        public UpsellController(DataContext context , UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [AllowAnonymous]
        [HttpPost("Upsell")]
        public async Task<IActionResult> AddUpsell(Upsell upsell)
        {
            await Mediator.Send(new Create.Command{Upsell = upsell});
            return Ok();
        }

        [AllowAnonymous]
        [HttpGet("Upsell")]
        public async Task<List<Upsell>> GetUpsell()
        {
            return await Mediator.Send(new List.Query());
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Upsell>> FindUpsell(Guid id)
        {
            var Upsell = await Mediator.Send(new Details.Query{id = id});
            return Upsell;
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCities(Guid id ,Upsell UpSell)
        {
            UpSell.Id = id;
            await Mediator.Send(new Edit.Command{Upsell = UpSell});
            return Ok();        
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUpsell(Guid id)
        {   
            return Ok(await Mediator.Send(new Delete.Command{Id = id})); 
        }
    }
}