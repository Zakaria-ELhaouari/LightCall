
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Status
{
    public class Create
    {
        public class Command : IRequest
        {
            public StatusModel Status { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                await _context.Status.AddAsync(request.Status);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}