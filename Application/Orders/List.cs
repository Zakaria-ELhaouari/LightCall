using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Orders
{
    public class List
    {
        public class Query : IRequest<Result<List<Order>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Order>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<List<Order>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Order>>.Success( await _context.Orders.Include(o=> o.Project ).ToListAsync());
               
            }
        }
    }
}