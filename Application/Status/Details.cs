using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Status
{
    public class Details
    {
        public class Query : IRequest<Domain.Status>
        {
            public int id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Domain.Status>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Domain.Status> Handle(Query request, CancellationToken cancellationToken)
            {
                var status = await _context.Status.FindAsync(request.id);

              

                return status;
            }
        }
    }
}