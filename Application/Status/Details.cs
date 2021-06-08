using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Status
{
    public class Details
    {
        public class Query : IRequest<Result<StatusModel>>
        {
            public Guid id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<StatusModel>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<StatusModel>> Handle(Query request, CancellationToken cancellationToken)
            {
                var status = await _context.Status.FindAsync(request.id);

                return Result<StatusModel>.Success(status);
            }
        }
    }
}