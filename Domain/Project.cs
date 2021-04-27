using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Project
    {

        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }

    }
}
