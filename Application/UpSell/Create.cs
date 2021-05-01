using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using FluentValidation;
using Application.Core;

namespace Application.UpSell
{
    public class Create 
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Upsell Upsell { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Upsell).SetValidator(new UpSellValidator());
            }
        }
        public class Handler : IRequestHandler<Command , Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context , IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {   
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                request.Upsell.User = user;
                await _context.Upsell.AddAsync(request.Upsell);
                 var Result = await _context.SaveChangesAsync()> 0;
                if (!Result) return Result<Unit>.Failure("Failed to create new Upsell");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}