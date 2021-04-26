using System.Collections.Generic;
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
    // [Authorize(Roles = "Admin")]
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class OperateurAcc : ControllerBase
    {
        private readonly TokenService _tokenService;
        private readonly UserManager<AppUser> _userManager;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public OperateurAcc(UserManager<AppUser> userManager, IMapper mapper ,TokenService tokenService, DataContext context)
        {
            _tokenService = tokenService;
            _mapper = mapper;
            _userManager = userManager;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("OperateurAcc")]
        public async Task<ActionResult<UserDto>> CreatOperator(RegisterDto registerDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                return BadRequest("Email taken");
            }
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
            {
                return BadRequest("Username taken");
            }

            var Operator = new AppUser(){};
            _mapper.Map(registerDto, Operator);
            
            var result = await _userManager.CreateAsync(Operator, registerDto.Password);
            
            await _userManager.AddToRoleAsync(Operator, "Operator");

            if (result.Succeeded)
            {
                return CreateUserObject(Operator);
            }

            return BadRequest("Problem creat acc Operator");
        }

        [HttpGet("Operators")]
        public async Task<ActionResult<List<ProfileDto>>> GeOperator() 
        {
            var Operators = await _userManager.GetUsersInRoleAsync("Operator");
            var OperatorsToReturn = _mapper.Map<List<ProfileDto>>(Operators);

            return OperatorsToReturn;

        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var Oper = await _context.Users.FindAsync(id);
            if(Oper == null || !await _userManager.IsInRoleAsync(Oper , "Operator")){
                return BadRequest();
            }
            _context.Users.Remove(Oper);
            await _context.SaveChangesAsync();
            return Ok();
        }

        private UserDto CreateUserObject(AppUser user)
        {
            return new UserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Image = null,
                Username = user.UserName
            };
        }
    }
}