using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.cities
{
    public class Details
    {
        public class Query : IRequest<City>
        {
            public Guid id { get; set; }
            
        }

        public class Handler : IRequestHandler<Query, City>
        {
            private readonly DataContext _context;
            public Handler(DataContext context )
            {
                _context = context;
            }
            public async Task<City> Handle(Query request, CancellationToken cancellationToken)
            {
                var city = await _context.Cities.FindAsync(request.id);
                
                return city;
            }
        }
    }
}