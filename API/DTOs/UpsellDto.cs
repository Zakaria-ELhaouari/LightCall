using System;
using System.Collections.Generic;
using Domain;

namespace API.DTOs
{
    public class UpsellDto
    {
        public Guid Id { get; set; }
        public bool Status { get; set; }
        public Projects Project { get; set; }
        public ICollection<Products> Products { get; set; }
        
    }
}