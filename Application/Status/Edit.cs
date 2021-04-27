using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Status
{
    public class Edit
    {
        public class Command : IRequest
        {
            public StatusModel Status { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {


                // _context.Entry(request.Status).State = EntityState.Modified;
                var status = await _context.Status.FindAsync(request.Status.Id);
                _mapper.Map(request.Status, status);


                await _context.SaveChangesAsync();


                return Unit.Value;
            }
        }
    }
}