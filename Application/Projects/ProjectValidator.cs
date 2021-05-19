using Domain;
using FluentValidation;

namespace Application.Projects
{
    public class ProjectValidator : AbstractValidator<Project>
    {
        public ProjectValidator()
        {
            RuleFor(x => x.Project_Type).NotEmpty();
            RuleFor(x => x.Question_description).NotEmpty();
            // RuleFor(x => x.Products_ids).NotEmpty();
            // RuleFor(x => x.User).NotEmpty();
        }
    }
}