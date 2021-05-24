using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ManagementOperaot
{
    public class List
    {
        public class Query : IRequest<List<OperatorAcc>>{}

        public class Handler : IRequestHandler<Query, List<OperatorAcc>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<OperatorAcc>> Handle(Query request, CancellationToken cancellationToken)
            {
                // var Operators = await _userManager.GetUsersInRoleAsync("Operator");
                // var OperatorsToReturn = _mapper.Map<List<ProfileDto>>(Operators);
                // return OperatorsToReturn;
                var AllOperators = await _context.OperatoreAccount.ToListAsync();
                return AllOperators;
            }
        }
    }
}