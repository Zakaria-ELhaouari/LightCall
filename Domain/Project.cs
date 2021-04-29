using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Project
    {

        public Guid Id { get; set; }
        public string Project_Type { get; set; }
        public string Question_description { get; set; }
        public AppUser AppUser { get; set; }

    }
}
