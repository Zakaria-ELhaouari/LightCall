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
        // public async Task<IActionResult> AssignUpsell()
        // {
        //     var GetUser = await _userManager.GetUserAsync(User);

        //     var AllProduct = await _context.Product
            
        // }

        [AllowAnonymous]
        [HttpPost("Upsell")]
        public async Task<IActionResult> AddUpsell(Upsell upsell)
        {
            var CurrentUser = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            upsell.AppUser.Id = CurrentUser.Id;
            await Mediator.Send(new Create.Command{Upsell = upsell});
            return Ok();
        }

        [AllowAnonymous]
        [HttpGet("Upsell")]
        public async Task<List<Upsell>> GetUpsell()
        {
            var user = await _userManager.GetUserAsync(User);
            var allUpSell = await _context.Upsell
                            .Where(ups => ups.AppUser.Id == user.Id)
                            .ToListAsync();


        }
    }
}