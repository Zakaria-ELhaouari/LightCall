using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Projects;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjectController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> CreatProject(Project project)
        { 
            return HandleResult( await Mediator.Send(new Create.Command{Project = project}));
        }

        [HttpGet]
        public async Task<List<Project>> ListProjects()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> DetailProject(Guid id)
        {
            var project = await Mediator.Send(new Details.Query{Id = id});
            return project;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditsProject(Guid id ,Project project)
        {
            project.Id = id;   
            return HandleResult(  await Mediator.Send(new Edit.Command{Project = project}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(Guid id)
        {   
            return Ok(await Mediator.Send(new Delete.Command{Id = id})); 
        }
    }
}