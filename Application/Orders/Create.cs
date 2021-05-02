
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Order Order { get; set; }
        }

        public class Handler : IRequestHandler<Command  , Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                await _context.Orders.AddAsync(request.Order);
               var Result =  await _context.SaveChangesAsync() > 0;
                if (!Result) return Result<Unit>.Failure("Failed to create Order");
                return Result<Unit>.Success(Unit.Value);

            }
        }
    }
}