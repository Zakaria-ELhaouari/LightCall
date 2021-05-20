using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.ManagementOperaot
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            // private readonly DataContext _context;
            // private readonly UserManager<AppUser> _userManager;
            // public Handler(UserManager<AppUser> userManager,DataContext context)
            // {
            //     _context = context;
            // }
            // public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            // {

            //     var Oper = await _context.OperatoreAccount.FindAsync(request.id);
            //     if(Oper == null || !await _userManager.IsInRoleAsync(Oper , "Operator")){
            //         return Unit.Value;
            //     }
            //     _context.OperatoreAccount.Remove(Oper);
            //     await _context.SaveChangesAsync();
            //     return Unit.Value;
            // }
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var Oper = await _context.OperatoreAccount.FindAsync(request.id);
                _context.OperatoreAccount.Remove(Oper);
                var Result =  await _context.SaveChangesAsync()> 0;
                if (!Result) return Result<Unit>.Failure("Failed to Delete Status");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}