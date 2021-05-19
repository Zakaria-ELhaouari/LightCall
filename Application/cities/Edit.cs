using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.cities
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public CityDto City { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator() {
                RuleFor(x => x.City).SetValidator(new CityValidator());
            }
        }

        public class Handler : IRequestHandler<Command , Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context , IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var city = await _context.Cities.FindAsync(request.City.Id);
                List<Shipping_Company> Shipping_Companies = new List<Shipping_Company>();

                foreach (var company in request.City.shipping_ids)
                {
                    Shipping_Companies.Add(await _context.Shipping_Companies.FindAsync(company));
                }

                city.Shipping_Companies = Shipping_Companies;
                city.CityName = request.City.CityName;
                city.ZipCode = request.City.ZipCode;
                // _mapper.Map(request.City , city);
                // await _context.SaveChangesAsync();
                _context.Cities.Update(city);
                var Result = await _context.SaveChangesAsync() > 0;
                if(!Result) return Result<Unit>.Failure("Failed to edite city");
                return Result<Unit>.Success(Unit.Value);

                // return Unit.Value;
            }
        }
    }
}