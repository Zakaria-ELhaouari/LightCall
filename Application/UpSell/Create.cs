using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;


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
            private readonly UserManager<AppUser> _userManager;
            public Handler(DataContext context , UserManager<AppUser> userManager )
            {
                _context = context;
                _userManager = userManager;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {   
                await _context.Upsell.AddAsync(request.Upsell);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}