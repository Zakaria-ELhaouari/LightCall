using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.UpSell
{
    public class Edit
    {
         public class Command : IRequest
        {
            public Upsell Upsell { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context , IMapper mapper , IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                if(user == request.Upsell.User){
                    var Upsell = await _context.Upsell.FindAsync(request.Upsell.Id);
                    _mapper.Map(request.Upsell , Upsell);
                    await _context.SaveChangesAsync();

                    return Unit.Value;
                }else{
                    return Unit.Value;
                }
                 return Unit.Value;
            }
        }
    }    
}