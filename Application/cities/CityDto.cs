using System;
using System.Collections.Generic;

namespace Application.cities
{
    public class CityDto
    {
        public Guid Id { get; set; }
        public string CityName { get; set; }
        public string ZipCode { get; set; }
        public IList<Guid> shipping_ids { get; set; }
    }
}