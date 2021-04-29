using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.cities
{
    public class List
    {
        public class Query : IRequest<List<City>>{}

        public class Handler : IRequestHandler<Query, List<City>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<City>> Handle(Query request, CancellationToken cancellationToken)
            {
                var AllCities = await _context.Cities
                .Include(x => x.Shipping_Companies)
                .ToListAsync();
                return AllCities;
            }
        }
    }
}