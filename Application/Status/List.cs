using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Status
{
    public class List
    {
        public class Query : IRequest<List<Domain.Status>> { }

        public class Handler : IRequestHandler<Query, List<Domain.Status>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Domain.Status>> Handle(Query request, CancellationToken cancellationToken)
            {
                var Status = await _context.Status.ToListAsync();
                return Status;
            }
        }
    }
}