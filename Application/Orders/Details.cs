using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Details
    {
        public class Query : IRequest<Result<Order>>
        {
            public Guid id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Result<Order>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Order>> Handle(Query request, CancellationToken cancellationToken)
            {
                var status = await _context.Orders.FindAsync(request.id);

                return Result<Order>.Success(status);
            }
        }
    }
}