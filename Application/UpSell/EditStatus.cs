using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.UpSell
{
    public class EditStatus
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var Upsell = await _context.Upsell.FindAsync(request.Id);
                if(Upsell != null && Upsell.User == user && Upsell.Status == false){
                    Upsell.Status = true;
                    await _context.SaveChangesAsync();
                    return Unit.Value;
                }else if(Upsell != null && Upsell.User == user && Upsell.Status == true){
                    Upsell.Status = false;
                    await _context.SaveChangesAsync();
                    return Unit.Value;
                }else{
                    return Unit.Value;
                }
                
            }
        }
    }
}