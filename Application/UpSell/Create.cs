using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Application.UpSell
{
    public class Create 
    {
        public class Command : IRequest
        {
            public Upsell Upsell { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context , IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {   
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                request.Upsell.User = user;
                await _context.Upsell.AddAsync(request.Upsell);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}