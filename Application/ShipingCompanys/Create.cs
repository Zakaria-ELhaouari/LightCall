using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.ShipingCompanys
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public ShippingCompanyDto ShippingCompany { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.ShippingCompany).SetValidator(new Shiping_CompanyValidator());
            }
        }

        public class Handler : IRequestHandler<Command , Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                List<City> cities = new List<City>();

                foreach (var city in request.ShippingCompany.citiesIds)
                {
                    cities.Add(await _context.Cities.FindAsync(city));
                }

                Shipping_Company shippingCompany = new Shipping_Company(){
                    Name = request.ShippingCompany.Name,
                    ApiClient = request.ShippingCompany.ApiClient,
                    Cities = cities
                };
                await _context.Shipping_Companies.AddAsync(shippingCompany);
                var Result = await _context.SaveChangesAsync()> 0;
                if (!Result) return Result<Unit>.Failure("Failed to create shiping company");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}