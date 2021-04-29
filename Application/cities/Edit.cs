using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.cities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public CityDto City { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator() {
                RuleFor(x => x.City).SetValidator(new CityValidator());
            }
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
                var city = await _context.Cities.FindAsync(request.City.Id);
                _mapper.Map(request.City , city);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}