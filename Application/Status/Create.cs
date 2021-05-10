
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Status
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public StatusModel Status { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Status).SetValidator(new StatusValidator());
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
                await _context.Status.AddAsync(request.Status)
                var Result = await _context.SaveChangesAsync()> 0;
                if (!Result) return Result<Unit>.Failure("Failed to create Status");
                return Result<Unit>.Success(Unit.Value);
                
            }
        }
    }
}