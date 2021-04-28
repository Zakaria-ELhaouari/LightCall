using System;
using System.Collections.Generic;

namespace Domain
{
    public class Upsell
    {
        public Guid Id { get; set; }
        public bool Status { get; set; }
        public Projects Project { get; set; }
        public ICollection<Products> Products { get; set; }
        public AppUser AppUser { get; set; }
    }
}