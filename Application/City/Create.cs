using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.City
{
    public class Create
    {
        public class Command : IRequest
        {
            public Cities Cities { get; set; }
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
                await _context.Cities.AddAsync(request.Cities);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}