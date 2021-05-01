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
    [Authorize(Roles = "Member")]
    public class UpsellController : BaseApiController
    {
        [HttpPost("Upsell")]
        public async Task<IActionResult> AddUpsell(Upsell upsell)
        {
            return HandleResult( await Mediator.Send(new Create.Command{Upsell = upsell}));
        }

        [HttpGet("Upsell")]
        public async Task<List<Upsell>> GetUpsell()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Upsell>> FindUpsell(Guid id)
        {
            var Upsell = await Mediator.Send(new Details.Query{id = id});
            return Upsell;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUpsell(Guid id ,Upsell UpSell)
        {
            UpSell.Id = id;
            await Mediator.Send(new Edit.Command{Upsell = UpSell});
            return Ok();        
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUpsell(Guid id)
        {   
            return Ok(await Mediator.Send(new Delete.Command{Id = id})); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ChnageStatusUpsell(Guid id )
        {
            await Mediator.Send(new EditStatus.Command{Id = id});
            return Ok();        
        }
    }
}