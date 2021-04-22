using System;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class OperatorAcc 
    {
        public Guid Id { get; set; }
        
        
        public bool Status { get; set; }
        public int OrderStatus { get; set; }
        public AppUser User { get; set; }
    }
}