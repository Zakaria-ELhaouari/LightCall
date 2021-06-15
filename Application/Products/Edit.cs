using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public ProductDto Product { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.FindAsync(request.Product.Id);
                Project project = new Project();
                var prj = request.Product.ProjectId;
                project = await _context.Projects.FindAsync(prj);
                product.Name = request.Product.Name;
                product.Description = request.Product.Description;
                product.Quantity= request.Product.Quantity;
                product.Project = project;
                _context.Products.Update(product);
                // _mapper.Map(request.Product, product);
                // var Result = await _context.SaveChangesAsync() > 0;
                var Result = await _context.SaveChangesAsync() > 0;
                if(!Result) return Result<Unit>.Failure("Failed to edite product");
                return Result<Unit>.Success(Unit.Value);
                // if (!Result) return Result<Unit>.Failure("Failed to Update Product");
                
            }
        }
    }
}