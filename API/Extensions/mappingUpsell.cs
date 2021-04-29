using AutoMapper;
using Domain;

namespace API.Extensions
{
    public class mappingUpsell : Profile
    {
        public mappingUpsell()
        {
            CreateMap<DTOs.UpsellDto, Upsell>();
        }
    }
}