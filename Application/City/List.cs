using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.City
{
    public class List
    {
        public class Query : IRequest<List<Cities>>{}

        public class Handler : IRequestHandler<Query, List<Cities>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Cities>> Handle(Query request, CancellationToken cancellationToken)
            {
                var AllCities = await _context.Cities.ToListAsync();
                return AllCities;
            }
        }
    }
}