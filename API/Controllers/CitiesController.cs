using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Services;
using Application.cities;
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
        [HttpPost]
        public async Task<IActionResult> AddCities(CityDto City)
        {
            
            return Ok(await Mediator.Send(new Create.Command{City = City}));
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<List<City>>> GetCities()
        {
            var AllCities = await Mediator.Send(new List.Query());
            // var AllCitieToReturn = _mapper.Map<List<CitiesDto>>(AllCities);
            return AllCities;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<City>> FindCity(Guid id)
        {
            var city = await Mediator.Send(new Details.Query{id = id});
            return city;
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCity(Guid id ,CityDto City)
        {
            City.Id = id;
            await Mediator.Send(new Edit.Command{City = City});
            return Ok();        
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> UpdateCities(Guid id)
        {   
            return Ok(await Mediator.Send(new Delete.Command{id = id})); 
        }
    }
}