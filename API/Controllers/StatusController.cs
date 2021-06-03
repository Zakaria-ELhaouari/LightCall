﻿using System;
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
    public class StatusController : BaseApiController
    {

        private readonly DataContext _context;

        public StatusController(DataContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StatusModel>>> GetStatus()
        {

            
            return HandleResult( await Mediator.Send(new List.Query()));

           
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<StatusModel>> GetStatus(Guid id)
        {
           return HandleResult( await Mediator.Send(new Details.Query { id = id }));
           
        }

        
    
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStatus(Guid id, StatusModel status)
        {
            status.Id = id;
           return HandleResult( await Mediator.Send(new Edit.Command { Status = status  }));
            
        }

        
 
        [HttpPost]
        public async Task<ActionResult<StatusModel>> PostStatus(StatusModel status)
        {
           return HandleResult( await Mediator.Send(new Create.Command { Status = status }));
            
        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult<StatusModel>> DeleteStatus(Guid id)
        {

          return HandleResult(  await Mediator.Send(new Delete.Command { id = id }));
            
        }

     
    }
}
