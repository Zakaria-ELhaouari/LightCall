using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Status
{
    class StatusValidator : AbstractValidator<StatusModel>
    {

        public StatusValidator()
        {
            RuleFor(x => x.StatusType).NotEmpty();
            RuleFor(x => x.StatusPiority).NotEmpty();
            RuleFor(x => x.ClosingStatus).NotEmpty();

        }
       
    }
}
