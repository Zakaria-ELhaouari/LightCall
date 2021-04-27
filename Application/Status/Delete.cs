using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Status
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid id { get; set; }
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
                var satusToDel = await _context.Status.FindAsync(request.id);
                _context.Status.Remove(satusToDel);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}