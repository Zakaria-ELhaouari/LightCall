using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Application.ManagementOperaot;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    // [Authorize(Roles = "Admin")]
    [AllowAnonymous]
    public class OperateurAccount : BaseApiController
    {
        private readonly TokenService _tokenService;
        private readonly UserManager<AppUser> _userManager;
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public OperateurAccount(UserManager<AppUser> userManager, IMapper mapper ,TokenService tokenService, DataContext context)
        {
            _tokenService = tokenService;
            _mapper = mapper;
            _userManager = userManager;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("OperateurAcc")]
        public async Task<ActionResult<ProfileDto>> CreatOperator(RegisterDto registerDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                return BadRequest("Email taken");
            }
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
            {
                return BadRequest("Username taken");
            }

            var user = new OperatorAcc(){};
            _mapper.Map(registerDto, user);
            
            var result = await _userManager.CreateAsync(user, registerDto.Password);
            
	        await _userManager.AddToRoleAsync(user, "Operator");

            if (result.Succeeded)
            {
                return await CreateUserObject(user);
            }

            return BadRequest("Problem registering user");
        }

        [HttpGet("Operators")]
        public async Task<ActionResult<List<OperatorAcc>>> GeOperator() 
        {
            var AllOperator = await Mediator.Send(new List.Query());
            return AllOperator;
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOperator(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{id = id})); 
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOperator(string id , OperatorAcc Operatoraccount)
        {
            Operatoraccount.Id = id;
            await Mediator.Send(new Edit.Command{OperatorAccount = Operatoraccount});
            return Ok();
        }

        private async Task<ProfileDto> CreateUserObject(OperatorAcc user)
        {
            await Task.Delay(5000);
            return new ProfileDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Image = null,
                Email = user.Email,
                Username = user.UserName,
                SkypeId = user.SkypeId
            };
        }
    }
}