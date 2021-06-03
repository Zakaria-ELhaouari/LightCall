using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.ShipingCompanys
{
    public class Edit
    {
        public class Command: IRequest<Result<Unit>>
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

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
             private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var company = await _context.Shipping_Companies.FindAsync(request.ShippingCompany.id);
                List<City> cities = new List<City>();
                foreach (var city in request.ShippingCompany.citiesIds)
                {
                    cities.Add(await _context.Cities.FindAsync(city));
                }
                company.Name = request.ShippingCompany.Name;
                company.ApiClient = request.ShippingCompany.ApiClient;
                company.Cities = cities;

                _context.Shipping_Companies.Update(company);
                // _mapper.Map(request.ShippingCompany , company);
                var Result = await _context.SaveChangesAsync() > 0;
                if(!Result) return Result<Unit>.Failure("Failed to edit the shipping company");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}