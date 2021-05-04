using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.UpSell
{
    public class UpSellValidator : AbstractValidator<UpsellDto>
    {
        public UpSellValidator()
        {
            RuleFor(x => x.Status).NotEmpty();
            RuleFor(x => x.Project_id).NotEmpty();
            RuleFor(x => x.Products_ids).NotEmpty();
            // RuleFor(x => x.User).NotEmpty();
        }
    }
}


