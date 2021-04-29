using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Application.City;
using AutoMapper;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CitiesController : BaseApiController
    {
        private readonly IMapper _mapper;
        public CitiesController(IMapper mapper )
        {
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost("Cities")]
        public async Task<IActionResult> AddCities(Cities cities)
        {
            await Mediator.Send(new Create.Command{Cities = cities});
            return Ok();
        }

        [AllowAnonymous]
        [HttpGet("AllCities")]
        public async Task<ActionResult<List<Cities>>> GetCities()
        {
            var AllCities = await Mediator.Send(new List.Query());
            // var AllCitieToReturn = _mapper.Map<List<CitiesDto>>(AllCities);
            return AllCities;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Cities>> FindCity(Guid id)
        {
            var city = await Mediator.Send(new Details.Query{id = id});
            return city;
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCities(Guid id ,Cities Cities)
        {
            Cities.Id = id;
            await Mediator.Send(new Edit.Command{cities =Cities});
            return Ok();        
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCities(Guid id)
        {   
            return Ok(await Mediator.Send(new Delete.Command{id = id})); 
        }
    }
}