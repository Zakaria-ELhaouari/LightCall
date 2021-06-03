using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ShipingCompanys
{
    public class List
    {
        public class Query : IRequest<Result<List<Shipping_Company>>>{}

        public class Handler : IRequestHandler<Query, Result<List<Shipping_Company>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<List<Shipping_Company>>> Handle(Query request, CancellationToken cancellationToken)
            {
                // return Result<List<Shipping_Company>>.Success( await _context.Shipping_Companies.Include(x => x.Cities).ToListAsync());
                 return Result<List<Shipping_Company>>.Success( await _context.Shipping_Companies.Include(x => x.Cities).ToListAsync());
                // var shipingCompanies = await _context.Shipping_Companies
                //                        .Include(x => x.Cities)
                //                        .ToListAsync();
                // return shipingCompanies;
            }
        }
    }
}