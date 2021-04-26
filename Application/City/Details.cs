using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.City
{
    public class Details
    {
        public class Query : IRequest<Cities>
        {
            public Guid id { get; set; }
            
        }

        public class Handler : IRequestHandler<Query, Cities>
        {
            private readonly DataContext _context;
            public Handler(DataContext context )
            {
                _context = context;
            }
            public async Task<Cities> Handle(Query request, CancellationToken cancellationToken)
            {
                var city = await _context.Cities.FindAsync(request.id);
                // if(city == null){
                //     return BadRequest();
                // }
                return city;
            }
        }
    }
}