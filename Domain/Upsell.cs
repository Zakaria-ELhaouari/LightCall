using System;
using System.Collections.Generic;

namespace Domain
{
    public class Upsell
    {
        public Guid Id { get; set; }
        public bool Status { get; set; }
        public Project Project { get; set; }
        public ICollection<Product> Products { get; set; }
        public AppUser User { get; set; }
    }
}