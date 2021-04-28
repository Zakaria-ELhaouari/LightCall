using System;

namespace Domain
{
    public class Products
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public Projects Project { get; set; }
        public AppUser User { get; set; }

    }
}