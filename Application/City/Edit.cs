using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.City
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Cities cities { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context , IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var city = await _context.Cities.FindAsync(request.cities.Id);
                _mapper.Map(request.cities , city);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}