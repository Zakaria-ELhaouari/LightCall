using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Status;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusController : BaseApiController
    {

        private readonly DataContext _context;

        public StatusController(DataContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Status>>> GetStatus()
        {

            
             var Status = await Mediator.Send(new List.Query());

            return Status;
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Status>> GetStatus(int id)
        {
            var status = await Mediator.Send(new Details.Query { id = id });
            return status;
        }

        
    
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatus(int id, Status status)
        {
            status.Id = id;
            await Mediator.Send(new Edit.Command { Status = status });
            return Ok();
        }

        
 
        [HttpPost]
        public async Task<ActionResult<Status>> PostStatus(Status status)
        {
            await Mediator.Send(new Create.Command { Status = status });
            return Ok();
        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult<Status>> DeleteStatus(int id)
        {

            await Mediator.Send(new Delete.Command { id = id });
            return Ok();
        }

     
    }
}
