using System;
using System.Collections.Generic;

namespace Domain
{
    public class Cities
    {
        public Guid Id { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; } 
        public virtual IList<Shipping_Company> Shipping_Company { get; set; }
    }
}