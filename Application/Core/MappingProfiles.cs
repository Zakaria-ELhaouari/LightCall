using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles(){
            CreateMap<Cities , Cities>();
            CreateMap<StatusModel , StatusModel>();
            CreateMap<OperatorAcc , OperatorAcc>();
            CreateMap<Upsell , Upsell>();
            CreateMap<Project , Project>();
        }
    }
}