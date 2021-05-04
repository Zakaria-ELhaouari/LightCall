using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects
{
    public class Create
    {
        public class Command : IRequest <Result<Unit>>
        {
            public Project Project { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Project).SetValidator(new ProjectValidator());
            }
        }
        public class Handler : IRequestHandler<Command , Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context , IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                request.Project.User = user ; 
                await _context.Projects.AddAsync(request.Project);
                var Result = await _context.SaveChangesAsync() > 0;
                if(!Result) return Result<Unit>.Failure("Failed to create upsell");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}