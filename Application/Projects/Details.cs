using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects
{
    public class Details
    {
        public class Query : IRequest<Project>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query , Project>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }
            public async Task<Project> Handle(Query request, CancellationToken cancellationToken)
            {
                 var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                var project = await _context.Projects.FindAsync(request.Id);
                // if(InfoUpsell != null && InfoUpsell.User == user ){
                //     return InfoUpsell;
                // }
                // else{
                //     return BadRequest();
                // }
                return project;
            }
        }
    }
}