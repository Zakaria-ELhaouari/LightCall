using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>{
            public ProductDto Product { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IPhotoAccessor _photoAccessor;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor , IPhotoAccessor photoAccessor)
            {
                _context = context;
                _photoAccessor = photoAccessor;
                _userAccessor = userAccessor;
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                //find prj
                Project project = new Project();
                var prj = request.Product.ProjectId;
                project = await _context.Projects.FindAsync(prj);

                //add photo
                // var photoUploadResult = await _photoAccessor.AddPhoto(request.Product.File);

                // var photo = new Photo{
                //     Url = photoUploadResult.Url,
                //     Id = photoUploadResult.PublicId
                // };
                // await _context.Photos.AddAsync(photo);
                // List<Photo> photos = new List<Photo>();

                //  photos.Add(await _context.Photos.FindAsync(photo.Id));
                
                //add product
                Product prd = new Product(){
                    Name = request.Product.Name,
                    Description = request.Product.Description,
                    Quantity = request.Product.Quantity,
                    Project = project,
                    User = user,
                    Photos = null
                };

                await _context.SaveChangesAsync();
                await _context.Products.AddAsync(prd);
                
                // await _context.Products.AddAsync(request.Product);
                var Result = await _context.SaveChangesAsync()> 0;
                if (!Result) return Result<Unit>.Failure("Failed to create Product");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}