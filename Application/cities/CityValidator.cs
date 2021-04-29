using Domain;
using FluentValidation;

namespace Application.cities
{
    public class CityValidator : AbstractValidator<CityDto>
    {
        public CityValidator()
        {
            RuleFor(x => x.CityName).NotEmpty();
            RuleFor(x => x.ZipCode).NotEmpty();
        }
    }
}