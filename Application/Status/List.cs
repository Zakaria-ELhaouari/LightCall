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
        public class Query : IRequest<List<StatusModel>> { }

        public class Handler : IRequestHandler<Query, List<StatusModel>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<StatusModel>> Handle(Query request, CancellationToken cancellationToken)
            {
                var Status = await _context.Status.ToListAsync();
                return Status;
            }
        }
    }
}