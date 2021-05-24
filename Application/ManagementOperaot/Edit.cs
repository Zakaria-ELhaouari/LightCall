using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

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
            public Handler(DataContext context , IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var Operator = await _context.OperatoreAccount.FindAsync(request.OperatorAccount.Id);
                _mapper.Map(request.OperatorAccount , Operator);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}