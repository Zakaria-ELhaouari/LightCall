using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.UpSell
{
    public class UpSellValidator : AbstractValidator<Upsell>
    {
        public UpSellValidator()
        {
            RuleFor(x => x.Status).NotEmpty();
            RuleFor(x => x.Project).NotEmpty();
            RuleFor(x => x.Products).NotEmpty();
            RuleFor(x => x.User).NotEmpty();
        }
    }
}


