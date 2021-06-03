using Domain;
using FluentValidation;

namespace Application.ShipingCompanys
{
    public class Shiping_CompanyValidator: AbstractValidator<ShippingCompanyDto>
    {
        public Shiping_CompanyValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.ApiClient).NotEmpty();
        }
    }
}