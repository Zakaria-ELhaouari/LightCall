using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Interfaces;

namespace Application.ManagementOperaot
{
    public class Edit
    {
        public class Command : IRequest
        {
            public OperatorAcc OperatorAccount { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context , IMapper mapper ,IUserAccessor userAccessor)
            {
                _context = context;
                _mapper = mapper;
                _userAccessor = userAccessor;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Entry(request.OperatorAccount).State = EntityState.Modified;
                // var Operator = await _context.OperatoreAccount.FindAsync(request.OperatorAccount.Id);
                // var Operator = await _context.OperatoreAccount.FindAsync(request.OperatorAccount.Id);
                // _mapper.Map(request.OperatorAccount , Operator);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}