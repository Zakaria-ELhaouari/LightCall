using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
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
    public class CitiesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public CitiesController(DataContext context , IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("Cities")]
        public async Task<ActionResult> AddCities(Cities cities)
        {
            _context.Cities.Add(cities);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [AllowAnonymous]
        [HttpGet("AllCities")]
        public async Task<ActionResult<List<Cities>>> GetCities()
        {
            var AllCities = await _context.Cities.ToListAsync();
            // var AllCitieToReturn = _mapper.Map<List<CitiesDto>>(AllCities);
            return AllCities;
        }

        [AllowAnonymous]
        [HttpPut("EditCities")]
        public async Task<ActionResult> UpdateCities(Cities cities)
        {
            var UpdateInfo = _context.Cities.Update(cities);
            await _context.SaveChangesAsync();
            return Ok();        
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<ActionResult> UpdateCities(Guid id)
        {       
            var City = await _context.Cities.FindAsync(id);
            if(City == null){
                return BadRequest();
            }
            _context.Cities.Remove(City);
            await _context.SaveChangesAsync();
            return Ok(); 
        }
    }
}