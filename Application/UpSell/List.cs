using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.UpSell
{
    public class List
    {
        public class Query : IRequest<List<Upsell>>{}
        public class Handler : IRequestHandler<Query, List<Upsell>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Upsell>> Handle(Query request, CancellationToken cancellationToken)
            {
                var AllUpSell = await _context.Upsell
                                .Include(x => x.AppUser).ToListAsync();
                                
                return AllUpSell;
            }
        }
    }
}