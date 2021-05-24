using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Status
{
    public class List
    {
        public class Query : IRequest<Result<List<StatusModel>>> { }

        public class Handler : IRequestHandler<Query, Result<List<StatusModel>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<List<StatusModel>>> Handle(Query request, CancellationToken cancellationToken)
            {
              return Result<List<StatusModel>>.Success( await _context.Status.ToListAsync());
                
            }
        }
    }
}