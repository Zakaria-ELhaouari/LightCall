using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context , IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                var project = await _context.Projects.FindAsync(request.Id);
                if(project != null && project.User == user){
                     _context.Projects.Remove(project);
                    await _context.SaveChangesAsync();
                    return Unit.Value;
                }
                else
                {
                   return Unit.Value; 
                }
            }
        }
    }
}