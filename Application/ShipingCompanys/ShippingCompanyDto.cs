using System;
using System.Collections.Generic;

namespace Application.ShipingCompanys
{
    public class ShippingCompanyDto
    {
        public Guid id { get; set; }
        public string Name { get; set; }
        public string ApiClient { get; set; }
        public IList<Guid> cities { get; set; }
    }
}