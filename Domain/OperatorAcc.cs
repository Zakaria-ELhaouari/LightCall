using System;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class OperatorAcc : AppUser
    {
        public bool Status { get; set; }
    }
}