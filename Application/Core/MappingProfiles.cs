using Application.cities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles(){
            CreateMap<City , City>();
            CreateMap<CityDto , City>();
            CreateMap<StatusModel , StatusModel>();
            CreateMap<OperatorAcc , OperatorAcc>();
        }
    }
}