using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Orders
{
    public class Assign
    {

        public class Query : IRequest<Result<Order>>
        {
           

        }

        public class Handler : IRequestHandler<Query, Result<Order>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                _userAccessor = userAccessor;
            }
            public async Task<Result<Order>> Handle(Query request, CancellationToken cancellationToken)
            {

                var id = _userAccessor.GetUserId();
                var Operator = await _context.OperatoreAccount.FindAsync(id);
                if (Operator.Status)
                {
                    var order = await _context.Orders.Include(o => o.Status).OrderBy(o => o.Status.StatusPiority).FirstOrDefaultAsync();
                    order.Operators ??= new List<OperatorAcc>();
                    order.Operators.Add(Operator);
                    await _context.SaveChangesAsync() ;
                    return Result<Order>.Success(order);

                }
                return Result<Order>.Failure("Operator is Not Active") ;

            }
        }
    }
}
